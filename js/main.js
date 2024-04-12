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
    const tags = ["yang-a-input", "yang-l-input", "yang-b-input", "yang-d-input", "yang-a_a-input"];
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
    const tags = ["uncertainty-c_b-input", "uncertainty-c_d-input", "uncertainty-c_a_2a-input", "uncertainty-c_O_a_2a_input-input", "uncertainty-c_l-input"];
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
    const tags = ["statistic-number_list-input"];
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
        else if (this.id == 'option3') {
            function_name = 'tan';
            tan_init();
        }
        else if (this.id == 'option2') {
            function_name = 'uncertainty';
            uncertainty_init();
        }
        else if (this.id == 'option4') {
            function_name = 'statistic';
            statistic_init();
        }
    });
});

document.querySelector('#fractional').addEventListener('click', function () {
    console.log('fractional');
    // 切换到分数显示
    number_type = 'fractional';
    calculate();
});

document.querySelector('#decimal').addEventListener('click', function () {
    console.log('decimal');
    // 切换到小数显示
    number_type = 'decimal';
    calculate();
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
    const l = document.getElementById("yang-l-input").value
    const b = document.getElementById("yang-b-input").value
    const d = document.getElementById("yang-d-input").value
    const a_a = document.getElementById("yang-a_a-input").value
    
    var latexString = '';
    if (!a || !b || !l || !d) {
        latexString = `$$\\text{请填写完整数据}$$`;
        renderResult('', '', latexString);
    }
    else {
        try {
            result = calculateYang(l, a, b, d, a_a);
            console.log('Yang result: ', result);
            // 完整LaTeX表示
            if (number_type == 'fractional') {
                latexString = `$$ E = \ ${result} $$`;
            } else {
                latexString = `$$ E = \ ${result} $$`;
            }
            renderResult('', '', latexString);
        }
        catch (e) {
            console.log('杨氏模量计算失败:', e);
            latexString = `$$ Yang:\ Error!$$`;
            renderResult('', '', latexString);
        }
    }
}

function renderTan() {
    const input = document.getElementById("tan-input-input").value
    const f_tana = document.getElementById("tan-f_tana-input").value
    
    var latexString = '';
    if (!input || !f_tana) {
        latexString = `$$\\text{请填写完整数据}$$`;
        renderResult('', '', latexString);
    }
    else {
        try {
            result = calculateTan(input, f_tana);
            console.log('Tan result: ', result);
            // 完整LaTeX表示
            latexString = `$$ Tan:\ ${result} $$`;
            renderResult('', '', latexString);
        }
        catch (e) {
            console.log('正切值计算失败:', e);
            latexString = `$$ Tan:\ Error!$$`;
            renderResult('', '', latexString);
        }
    }
}

function renderUncertainty() {
    const c_b = document.getElementById("uncertainty-c_b-input").value
    const c_d = document.getElementById("uncertainty-c_d-input").value
    const c_a_2a = document.getElementById("uncertainty-c_a_2a-input").value
    const c_O_a_2a_input = document.getElementById("uncertainty-c_O_a_2a_input-input").value
    const c_l = document.getElementById("uncertainty-c_l-input").value
    
    var latexString = '';
    if (!c_b || !c_d || !c_a_2a || !c_O_a_2a_input || !c_l) {
        latexString = `$$\\text{请填写完整数据}$$`;
        renderResult('', '', latexString);
    }
    else {
        try {
            result = calculateUncertainty(c_b, c_d, c_a_2a, c_O_a_2a_input, c_l);
            console.log('Uncertainty result: ', result);
            // 完整LaTeX表示
            latexString = `$$ Uncertainty:\ ${result} $$`;
            renderResult('', '', latexString);
        }
        catch (e) {
            console.log('相对不确定度计算失败:', e);
            latexString = `$$ Uncertainty:\ Error!$$`;
            renderResult('', '', latexString);
        }
    }
}

function renderStatistic() {
    const number_list = document.getElementById("statistic-number_list-input").value
    
    var latexString = '';
    if (!number_list) {
        latexString = `$$\\text{请填写完整数据}$$`;
        renderResult('', '', latexString);
    }
    else {
        try {
            result = calculateStatistics(number_list);
            console.log('Statistic result: ', result);
            // 完整LaTeX表示
            latexString = `$$ Statistic:\ ${result} $$`;
            renderResult('', '', latexString);
        }
        catch (e) {
            console.log('统计计算失败:', e);
            latexString = `$$ Statistic:\ Error!$$`;
            renderResult('', '', latexString);
        }
    }
}

function calculate() {
    if (function_name == 'yang') {
        renderYang();
    }
    else if (function_name == 'tan') {
        renderTan();
    }
    else if (function_name == 'uncertainty') {
        renderUncertainty();
    }
    else if (function_name == 'statistic') {
        renderStatistic();
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



window.onload = function() {
    // Get all input elements inside the form
    const inputs = document.querySelectorAll('form input[type="text"]');
    
    // Attach change event listeners to each input element
    inputs.forEach(input => {
        input.addEventListener('input', calculate);
    });

    // Optionally, attach listeners to 'radio' buttons or 'checkboxes' if they also trigger calculations
    const radios = document.querySelectorAll('form input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', calculate);
    });

    const checkboxes = document.querySelectorAll('form input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculate);
    });

    // Event listener to trigger when the result content changes
    const observer = new MutationObserver(toggleOptionsVisibility);

    // Configuration of the observer:
    const config = { childList: true, subtree: true, characterData: true };

    // Start observing the target node for configured mutations
    observer.observe(resultContainer, config);


    // 在页面加载完毕后调用此函数以设置事件监听器
    document.addEventListener('DOMContentLoaded', autoHeight);
};