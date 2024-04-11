var resultsStorage = {
    latex: '',
    simple: '',
    fullExpression: ''
};

var function_name = 'yang';

var number_type = 'fractional';

async function show_warning(message, duration) {
    const warning = document.getElementById('warning');
    warning.innerHTML = message;
    warning.style.visibility = 'visible';
    // visibility: hidden
    if (duration) {
        setTimeout(() => {
            warning.style.visibility = 'hidden';
        }, duration);
    }
}

function show_loading() {
    const warning = document.getElementById('warning');
    warning.innerHTML = '正在计算...';
    // warning.style.display = 'block';
    warning.style.visibility = 'visible';
}

function hide_warning() {
    const warning = document.getElementById('warning');
    // warning.style.display = 'hide';
    warning.style.visibility = 'hidden';
}



function yang_init() {
    // 初始化杨氏模量计算功能
    document.getElementById('function-title').innerText = '计算平均杨氏模量';
    document.getElementById('function-detail').innerText = '请按照说明在下方输入数据。';
    for(const node of document.getElementsByClassName("data-input-box")){
        node.style.display = 'none';
    }
    const tags = ["yang-a-input", "yang-l-input", "yang-b-input", "yang-d-input"]
    for (const tag of tags){
        document.getElementById(tag).parentNode.style.display = 'block';
    }
    calculate();
}

function tan_init() {
    // 初始化计算正切值功能
    document.getElementById('function-title').innerText = '计算正切值';
    document.getElementById('function-detail').innerText = '请按照说明在下方输入数据。';
    for(const node of document.getElementsByClassName("data-input-box")){
        node.style.display = 'none';
    }
    const tags = ["tan-input-input", "tan-f_tana-input"];
    for (const tag of tags){
        document.getElementById(tag).parentNode.style.display = 'block';
    }
    calculate();
}

function uncertainty_init() {
    // 初始化计算相对不确定度功能
    document.getElementById('function-title').innerText = '计算相对不确定度';
    document.getElementById('function-detail').innerText = '请按照说明在下方输入数据。';
    for(const node of document.getElementsByClassName("data-input-box")){
        node.style.display = 'none';
    }
    const tags = ["uncertainty-c_b-input", "uncertainty_c_d-input", "uncertainty-c_a_2a-input", "uncertainty-c_O_a_2a_input-input", "uncertainty-c_l-input"];
    for (const tag of tags){
        document.getElementById(tag).parentNode.style.display = 'block';
    }
    calculate();
}

function statistic_init() {
    // 初始化计算正切值功能
    document.getElementById('function-title').innerText = '计算统计';
    document.getElementById('function-detail').innerText = '请按照说明在下方输入数据。';
    for(const node of document.getElementsByClassName("data-input-box")){
        node.style.display = 'none';
    }
    const tags = ["tan-input-input", "tan-f_tana-input"];
    for (const tag of tags){
        document.getElementById(tag).parentNode.style.display = 'block';
    }
    calculate();
}


document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('active');
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link !== this) {
                link.classList.remove('active');
            }
        });

        if (this.id == 'option1') {
            function_name = 'yang';
            yang_init();
        }
        else if (this.id == 'option2') {
            function_name = 'tan';
            tan_init();
        }
        else if (this.id == 'option3') {
            function_name = 'uncertainty';
            uncertainty_init();
        }
        else if (this.id == 'option4') {
            function_name = 'statistic';
            statistic_init();
        }
    });
});

document.querySelector('#matrix1').addEventListener('input', function () {
    // 矩阵1输入框内容发生变化
    inputarea1Focusing = true;
    inputarea2Focusing = false;
    if (this.value) {
        saveOri(this.value);
    }
});

document.querySelector('#fractional').addEventListener('click', function () {
    console.log('fractional');
    // 切换到分数显示
    number_type = 'fractional';
    calculateMatrix();
});

document.querySelector('#decimal').addEventListener('click', function () {
    console.log('decimal');
    // 切换到小数显示
    number_type = 'decimal';
    calculateMatrix();
});

function copyToClipboard(text) {
    console.log('复制内容:', text);
    if (navigator.clipboard) { // 使用现代异步剪贴板 API
        navigator.clipboard.writeText(text).then(() => {
            console.log('内容已复制到剪贴板');
            show_warning('内容已复制到剪贴板', 3000);
        }).catch(err => {
            console.error('无法复制内容: ', err);
            show_warning('复制失败', 3000);
        });
    } else { // 为不支持异步剪贴板 API 的浏览器提供后备方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            console.log('内容已复制到剪贴板');
            show_warning('内容已复制到剪贴板', 3000);
        } catch (err) {
            console.error('无法复制内容: ', err);
            show_warning('复制失败', 3000);
        }
        document.body.removeChild(textarea);
    }
}

// 复制 LaTeX 结果
document.getElementById('copy-latex').addEventListener('click', () => {
    copyToClipboard(resultsStorage.latex);
});

// 复制简单结果
document.getElementById('copy-simple-expression').addEventListener('click', () => {
    copyToClipboard(resultsStorage.simple);
});

// 复制完整表达式
document.getElementById('copy-expression').addEventListener('click', () => {
    copyToClipboard(resultsStorage.fullExpression);
});

function renderResult(latexStr, simpleStr, fullExprStr) {
    // 保存字符串到全局对象
    resultsStorage.latex = latexStr;
    resultsStorage.simple = simpleStr;
    resultsStorage.fullExpression = fullExprStr;
    if (simpleStr !== '') {
        hide_warning();
    }

    // 渲染 LaTeX 字符串
    const container = document.getElementById('result');
    container.innerHTML = fullExprStr;
    MathJax.typesetPromise([container]).catch(function (err) {
        console.error('MathJax render error:', err);
    });
}

function renderYang() {
    const a = document.getElementById("yang-a-input").value
    
    var latexString = '';
    if (!matrix1 || !matrix2) {
        if (!matrix1 && matrix2) {
            console.log('矩阵1为空');
            latexString = `$$\\text{矩阵1为空} \\times ${matrix2.getLatexString(number_type)}$$`;
        }
        else if (matrix1 && !matrix2) {
            console.log('矩阵2为空');
            latexString = `$$${matrix1.getLatexString(number_type)} \\times \\text{矩阵2为空}$$`;
        }
        else if (!matrix1 && !matrix2) {
            console.log('矩阵1和矩阵2为空');
            latexString = `$$\\text{矩阵1为空} \\times \\text{矩阵2为空}$$`;
        }
        else {
            console.log('矩阵1和矩阵2为空');
            latexString = `$$\\text{矩阵1为空} \\times \\text{矩阵2为空}$$`;
        }
        renderResult('', '', latexString);
    }
    else {
        try {
            result_matrix = matrix1.multiply(matrix2);
            console.log('result_matrix:', result_matrix);
            // 构建矩阵乘法的完整LaTeX表示
            latexString = `$$ ${matrix1.getLatexString(number_type)} \\times ${matrix2.getLatexString(number_type)} = ${result_matrix.getLatexString(number_type)} $$`;
            renderResult(result_matrix.getLatexString(number_type), result_matrix.getSimpleString(), latexString);
        }
        catch (e) {
            console.log('矩阵乘法失败:', e);
            latexString = `$$${matrix1.getLatexString(number_type)} \\times ${matrix2.getLatexString(number_type)} = \\text{矩阵乘法失败${e}}$$`;
            renderResult('', '', latexString);
        }
    }
}

function calculateMatrix() {
    if (function_name == 'yang') {
        if (!matrix1 || !matrix2) {
            console.log('矩阵1或矩阵2为空');
        }
        renderMatrixMultiplication(matrix1, matrix2);
    }
    else if (function_name == 'tan') {
        if (!matrix1) {
            console.log('矩阵1为空');
        }
        renderMatrixInverse(matrix1);
    }
    else if (function_name == 'uncertainty') {
        if (!matrix1 || !matrix2) {
            console.log('矩阵1或矩阵2为空');
        }
        renderMatrixAdd(matrix1, matrix2);
    }
    else if (function_name == 'statistic') {
        if (!matrix1 || !matrix2) {
            console.log('矩阵1或矩阵2为空');
        }
        renderMatrixMinus(matrix1, matrix2);
    }
}


function autoHeight() {
    const func = function (e) {
        // Set the height of the textarea to the height of its content
        if (this.value.indexOf("\n") != -1) {
            var lines = this.value.split("\n")
            var linesCount = lines.length
        }
        else {
            var linesCount = 1
        }
        if (linesCount > 2) {
            this.style.height = (linesCount * 1.5) + "em"
        }
        else {
            this.style.height = "3em"
        }
    }
    document.getElementById('matrix1').addEventListener('input', func);
    document.getElementById('matrix2').addEventListener('input', func);
}


// Listen for changes in the 'result' div content
const resultContainer = document.getElementById('result');
const optionsContainer = document.getElementById('copy-options');

// Function to check result content and toggle visibility
function toggleOptionsVisibility() {
    if (resultContainer.textContent.trim() !== '') {
        optionsContainer.style.display = 'block';
    } else {
        optionsContainer.style.display = 'none';
    }
}

// Event listener to trigger when the result content changes
const observer = new MutationObserver(toggleOptionsVisibility);

// Configuration of the observer:
const config = { childList: true, subtree: true, characterData: true };

// Start observing the target node for configured mutations
observer.observe(resultContainer, config);


// 在页面加载完毕后调用此函数以设置事件监听器
document.addEventListener('DOMContentLoaded', autoHeight);