const calculations = {
    "yang": {
        "name": "计算平均杨氏模量",
        "description": "请按照说明在下方输入数据。",
        "inputs" :{
            "y_l": {
                "name": "悬臂长度$l$(mm)",
                "details": "输入悬臂长度...",
                "type": "number"
            },
            "y_a": {
                "name": "砝码宽度$a$(mm)",
                "details": "输入砝码宽度...",
                "type": "number"
            },
            "y_b": {
                "name": "截面宽度$b$(mm)",
                "details": "输入截面宽度...",
                "type": "number"
            },
            "y_d": {
                "name": "悬臂梁厚度$d$(mm)",
                "details": "输入悬臂梁厚度...",
                "type": "number"
            },
            "y_a_a": {
                "name": "角度$2 \\theta $(°)",
                "details": "输入角度...",
                "type": "number"
            },
            "y_n": {
                "name": "砝码个数",
                "details": "输入砝码个数...",
                "type": "number"
            }
        },
        "calculation": {
            "function": "calculateYang",
            "arguments": ["y_l", "y_a", "y_b", "y_d", "y_a_a", "y_n"]
        },
        "outputs": {
            "result": "$$ E = \ {result} $$",
        }
    },
    "uncertainty": {
        "name": "计算杨氏模量的相对不确定度",
        "description": "请按照说明在下方输入数据。",
        "inputs": {
            "c_l": {
                "name": "悬臂长度$l$(mm)",
                "details": "输入悬臂长度...",
                "type": "number"
            },
            "c_b": {
                "name": "截面宽度$b$(mm)",
                "details": "输入截面宽度...",
                "type": "number"
            },
            "c_d": {
                "name": "悬臂梁厚度$d$(mm)",
                "details": "输入悬臂梁厚度...",
                "type": "number"
            },
            "c_a_2a": {
                "name": "角度$a$(°)",
                "details": "输入角度...",
                "type": "number"
            },
            "c_n": {
                "name": "砝码个数",
                "details": "输入砝码个数...",
                "type": "number"
            },
            "c_O_a_2a_input": {
                "name": "角度的相对不确定度",
                "details": "输入角度的相对不确定度...",
                "type": "number"
            },
            "c_m": {
                "name": "单个砝码质量",
                "details": "输入单个砝码质量...",
                "type": "number"
            }
        },
        "calculation": {
            "function": "calculateUncertainty",
            "arguments": ["c_l","c_b", "c_d", "c_a_2a", "c_O_a_2a_input", "c_m"]
        },
        "outputs": {
            "result": "$$ U = \ {result} $$",
        }
    },
    "tan": {
        "name": "计算正切值",
        "description": "请按照说明在下方输入数据。",
        "inputs": {
            "points": {
                "name": "坐标",
                "x": "水平标尺读数 $x_n$",
                "y": "竖直标尺读数 $h_n$",
                "x_detail": "输入水平标尺读数...",
                "y_detail": "输入竖直标尺读数...",
                "type": "coordinates"
            }
        },
        "calculation": {
            "function": "calculateTan",
            "arguments": ["points"]
        },
        "outputs": {
            "result": "$$ tan_{index} = \ {result} \\times 10^{-4} $$",
        }
    },
    "statistic": {
        "name": "数据基本处理",
        "description": "请按照说明在下方输入数据。",
        "inputs": {
            "number_list": {
                "name": "数据序列",
                "details": "输入数据：1, 2, 3...",
                "type": "text"
            }
        },
        "calculation": {
            "function": "calculateStatistics",
            "arguments": ["number_list"]
        },
        "outputs": {
            "result": "$$ 平均数是 {average} $$ $$ 方差是 {variance} $$ $$ 未乘以系数的绝对不确定度是 {row_bq} $$ $$ 绝对不确定度是 {bq} $$ $$ 相对不确定度是 {ex} $$ $$ 根据数据个数， t(m)是 {t_m} $$",
        }
    },
    "a_minus_b": {
        "name": "计算两数之差",
        "description": "请按照说明在下方输入数据。",
        "inputs": {
            "a": {
                "name": "数a",
                "details": "输入数a...",
                "type": "number"
            },
            "b": {
                "name": "数b",
                "details": "输入数b...",
                "type": "number"
            }
        },
        "calculation": {
            "function": "a_minus_b",
            "arguments": ["a", "b"]
        },
        "outputs": {
            "result": "$$ a - b = \ {result} $$",
        }
    },
        "Thermal_conductivity": {
        "name":"计算非良导体的热导率",
        "description":"请按照说明在下方输入数据",
        "inputs":{
            "B_l" :{
                "name":"B的厚度(cm)",
                "details":"输入B的厚度(cm)",
                "type":"number",
            },
            "A_d":{
                "name":"A的高度(cm)",
                "details":"输入A的厚度(cm)",
                "type":"number",
            },
            "A_D":{
                "name":"A的直径(cm)",
                "details":"输入A的直径(cm)",
                "type":"number",
            },
            "A_m":{
                "name":"A的质量(g)",
                "details":"输入A的质量(cm)",
                "type":"number",
            },
            "k":{
                "name":"斜率(K/s)",
                "details":"输入斜率(K/s)",
                "type":"number",
            },
            "T1":{
                "name":"T1",
                "details":"稳恒温度T1",
                "type":"number",
            },
            "T2":{
                "name":"T2",
                "details":"稳恒温度T2",
                "type":"number",
            },
        },
        "calculation": {
            "function": "REDAO",
            "arguments": ["B_l","A_d","A_D","A_m","k","T1","T2"]
        },
        "outputs": {
            "result": "$$ λ = {result} $$",
        }

    },
}


var function_name = Object.keys(calculations)[0];

function _renderResult(result) {
    if (result === "$$请填写所有数据。$$") {
        renderResult('', '', result);
        return;
    }
    console.log(result instanceof Array);
    if (result instanceof Array) {
        console.log(result);
        var latexString = "";
        for (const key in result) {
            latexString += calculations[function_name].outputs.result.replace("{index}", key).replace("{result}", result[key]);
        }
        renderResult('', '', latexString);
    } else if (result instanceof Object) {
        console.log(result);
        var latexString = calculations[function_name].outputs.result;
        for (const key in result) {
            latexString = latexString.replace(`{${key}}`, result[key]);
        }
        renderResult('', '', latexString);
    } else if (result instanceof Number || result instanceof String) {
        console.log(result);
        var latexString = calculations[function_name].outputs.result.replace("{result}", result);
        renderResult('', '', latexString);
    } else {
        console.log(result);
        console.error("Invalid result type.");
        var latexString = calculations[function_name].outputs.result.replace("{result}", result);
        renderResult('', '', latexString);
    }
}

function calculate() {
    const inputs = {};
    var valid = true;
    for (const key in calculations[function_name].inputs) {
        if (calculations[function_name].inputs[key].type === "coordinates") {
            const points = [];
            const rows = document.querySelectorAll(`#${function_name}-${key}-input tbody tr`);
            rows.forEach(row => {
                const x = row.cells[1].querySelector('input').value; // 获取X坐标
                const y = row.cells[2].querySelector('input').value; // 获取Y坐标
                if (x === "" || y === "") {
                    valid = false;
                }
                points.push({x: x, y: y});
            });
            inputs[key] = points;
        } else if (calculations[function_name].inputs[key].type === "number") {
            const input = document.getElementById(`${function_name}-${key}-input`);
            if (input) {
                inputs[key] = input.value;
                if (input.value === "") {
                    valid = false;
                }
            }
        } else if (calculations[function_name].inputs[key].type === "text") {
            const input = document.getElementById(`${function_name}-${key}-input`);
            if (input) {
                inputs[key] = input.value.split(',').map(Number);
                if (input.value === "") {
                    valid = false;
                }
            }
        }
    }
    if (valid === true) {
        console.log(...Object.values(inputs));
        const result = window[calculations[function_name].calculation.function](...Object.values(inputs));
        _renderResult(result);
    } else {
        _renderResult("$$请填写所有数据。$$");
    }
}

function init_calculation(cal_key) {
    const cur = document.getElementById(cal_key);
    cur.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link !== cur) {
            link.classList.remove('active');
        }
    });
    function_name = cal_key;
    document.getElementById('function-title').innerText = calculations[cal_key].name;
    document.getElementById('function-detail').innerText = calculations[cal_key].description;
    for(const node of document.getElementsByClassName("data-input-box")){
        node.style.display = 'none';
    }
    for(const tag in calculations[cal_key].inputs){
        document.getElementById(`${cal_key}-${tag}-input`).parentNode.style.display = 'block';
    }
    
    calculate();
}

function updateRowNumbers(table_id) {
    const rows = document.querySelectorAll(`#${table_id} tbody tr`);
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}

function add_event_listener_to_remove_button(table_id, remove_button) {
    remove_button.addEventListener('click', function() {        
        this.closest('tr').remove();
        updateRowNumbers(table_id);
        calculate();
    });
}

function add_event_listener_to_add_point(table_id, add_button, x_detail, y_detail) {
    add_button.addEventListener('click', function() {
        const table = document.getElementById(table_id).getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        cell1.innerHTML = table.rows.length;
        cell2.innerHTML = `<input type="number" class="form-control" placeholder="${x_detail}">`;
        cell3.innerHTML = `<input type="number" class="form-control" placeholder="${y_detail}">`;
        cell4.innerHTML = '<button type="button" class="btn btn-danger remove-point">删除</button>';
        cell4.children[0].addEventListener('click', function() {
            this.closest('tr').remove();
            updateRowNumbers(table_id);
        });
        const inputs = newRow.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', calculate);
        });
    });
}

window.onload = function () {
    const side_bar = document.getElementById('side-bar-box');
    const form = document.getElementById('input-form');

    // generate sidebar options
    for (let key in calculations) {
        // <a href="#" class="nav-link active" id="option1">计算杨氏模量</a>
        const a_tag = document.createElement('a');
        a_tag.href = "#";
        a_tag.classList.add('nav-link');
        a_tag.id = key;  // "yang"
        a_tag.innerText = calculations[key].name;
        a_tag.onclick = function (e) {
            e.preventDefault();
            init_calculation(this.id);
        };
        side_bar.appendChild(a_tag);
    }

    // generate form inputs
    for (let cal_key in calculations) {
        for (let key in calculations[cal_key].inputs) {
            const input = calculations[cal_key].inputs[key];
            const div = document.createElement('div');
            div.classList.add('mb-3');
            div.classList.add('data-input-box');
            div.style.display = "none";
            if (input.type === "number") {
                div.innerHTML = `
                    <label for="${cal_key}-${key}-input" class="form-label">${input.name}: </label>
                    <input type="number" class="form-control" id="${cal_key}-${key}-input" placeholder="${input.details}">
                `;
                form.appendChild(div);
            } else if (input.type === "coordinates") {
                div.innerHTML = `
                        <label for="${cal_key}-${key}-input" class="form-label">${input.name}: </label>
                        <table class="table" id="${cal_key}-${key}-input">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">${input.x}</th>
                                    <th scope="col">${input.y}</th>
                                    <th scope="col">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><input class="form-control" placeholder="${input.x_detail}"></td>
                                    <td><input class="form-control" placeholder="${input.y_detail}"></td>
                                    <td><button type="button" class="btn btn-danger remove-point">删除</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-primary add-point">添加坐标点</button>
                `;
                form.appendChild(div);
                add_event_listener_to_add_point(`${cal_key}-${key}-input`, div.querySelector('.add-point'), input.x_detail, input.y_detail);
                add_event_listener_to_remove_button(`${cal_key}-${key}-input`, div.querySelector('.remove-point'));
            } else if (input.type === "text") {
                div.innerHTML = `
                    <label for="${cal_key}-${key}-input" class="form-label">${input.name}: </label>
                    <input type="text" class="form-control" id="${cal_key}-${key}-input" placeholder="${input.details}">
                `;
                form.appendChild(div);
            }
        }
    }

    // add event listener to all input box
    const all_inputs = document.querySelectorAll('form input');

    // Attach change event listeners to each input element
    all_inputs.forEach(input => {
        input.addEventListener('input', calculate);
    });

    MathJax.typeset();

    init_calculation(function_name);
}

