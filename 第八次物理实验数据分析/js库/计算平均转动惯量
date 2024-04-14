
const PI = Math.acos(-1); //定义圆周率

function rotational_inertia_calculate(R_I_m, R_I_R, R_I_r, R_I_T, R_I_L) {
    //未考虑单位转化

    const g = 0; //重力加速度
    let res = 0;
    R_I_T = R_I_T * R_I_T;
    const fenzi = R_I_m * g * R_I_R * R_I_r * R_I_T;
    const fenmu = 4 * Math.pow(PI, 2) * R_I_L;
    res = fenzi / fenmu;
    return res;
}

let g = 0; //重力加速度（单位）

let m_a = 0; //圆盘a的质量（g）
let T_a = 0; //圆盘a的扭摆周期（s）
let J_a = 0; //圆盘a的平均转动惯量

//意义未明确的物理量
let Ra = 0; //(cm)
let Rb = 0; //(cm)
let rb = 0; //(cm)
let R = 0; //（cm）
let r = 0; //(cm)
let L = 0; //(cm)

let m_b = 0; //圆盘b的质量(g)

let T_ab = 0; //圆盘a和b的扭摆周期（s）
let J_ab = 0; //圆盘a和b的平均转动惯量
。
