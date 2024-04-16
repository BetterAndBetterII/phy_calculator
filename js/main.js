var resultsStorage = {
    latex: '',
    simple: '',
    fullExpression: ''
};

var number_type = 'decimal';

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

const resultContainer = document.getElementById('result');
const optionsContainer = document.getElementById('copy-options');
const label = document.getElementById('result-lable');

// Function to check result content and toggle visibility
function toggleOptionsVisibility() {
    // Listen for changes in the 'result' div content

    if (resultContainer.textContent.trim() !== '') {
        optionsContainer.style.display = 'block';
        label.style.display = 'block';
    } else {
        optionsContainer.style.display = 'none';
        label.style.display = 'none';
    }
}


window.onload = function() {
    // Event listener to trigger when the result content changes
    const observer = new MutationObserver(toggleOptionsVisibility);

    // Configuration of the observer:
    const config = { childList: true, subtree: true, characterData: true };

    // Start observing the target node for configured mutations
    observer.observe(resultContainer, config);
};