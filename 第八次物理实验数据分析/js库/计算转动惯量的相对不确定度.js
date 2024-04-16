
let check = 0;
//所用长度单位均为毫米，克，g为国际单位
let T_a = 0; //a的扭摆周期
let T_a_O = 0; //a的扭摆周期的不确定度

let m_a_O = 0.0; //a的质量的相对不确定度
let m_a = 0; //a的质量

let L = 0; //l的长度
let L_O = 0; //l的长度的相对不确定度

//悬臂梁厚度
let R_O = 0; //R的大小的相对不确定度
let R = 0; //R的大小
//角度
let r = 0; //r的大小
let r_O = 0; //r的大小的相对不确定度

console.log("是否进行计算，是则输入1");

// 模拟输入
check = 1;
T_a = 1;
T_a_O = 0.1;
m_a_O = 0.01;
m_a = 100;
L = 10;
L_O = 1;
R = 5;
R_O = 0.5;
r = 30;
r_O = 3;

while (check === 1) {
    console.log("请输入");
    console.log(T_a);
    console.log("请输入的不确定度");
    console.log(T_a_O);

    console.log("请输入的不确定度");
    console.log(m_a_O);
    console.log("请输入");
    console.log(m_a);

    console.log("请输入");
    console.log(L);
    console.log("请输入的相对不确定度");
    console.log(L_O);

    console.log("请输入");
    console.log(R);
    console.log("请输入的相对不确定度");
    console.log(R_O);

    console.log("请输入");
    console.log(r);
    console.log("请输入的相对不确定度");
    console.log(r_O);

    //计算各个平方和(带系数)
    let c_T = T_a_O / T_a;
    c_T = c_T * c_T * 4;

    let c_m = m_a_O / m_a;
    c_m = c_m * c_m;

    let c_L = L_O / L;
    c_L = c_L * c_L;

    let c_R = R_O / R;
    c_R = c_R * c_R;

    let c_r = r_O / r;
    c_r = c_r * c_r;

    let c_sum = c_T + c_m + c_L + c_R + c_r;
    console.log(c_sum.toFixed(6));

    console.log("结果为未开根号且放大了100000000的值");
    console.log("是否进行计算，是则输入1");

    // 模拟输入
    check = 0;
}
