//定义圆周率
const PI = Math.acos(-1);

//计算转动惯量
function rotational_inertia_calculate(R_I_m, R_I_R, R_I_r, R_I_T, R_I_L) {
    const g = 0; //重力加速度
    let res = 0;
    res=math.bignumber(res);

    //单位处理
    //g->kg
    R_I_m =math.chain(R_I_m).multiply(0.001).done();
    //cm->m
    R_I_r = math.chain(R_I_r).multiply(0.01).done();
    R_I_R = math.chain(R_I_R).multiply(0.01).done();

    R_I_T = Math.pow(R_I_T, 2);
    let fenzi = 0;
    fenzi=math.bignumber(fenzi);
    fenzi=math.chain(R_I_m).multiply(g).multiply(R_I_R).multiply(R_I_r).multiply(R_I_T).done();
    let fenmu =0;
    fenmu=math.bignumber(fenmu);
    fenmu= math.chain(4).multiply(PI).multiply(PI).multiply(R_I_L).done();
    res = math.chain(fenzi).divide(fenmu).done();
    res=res.toFixed(6);
    return res;
}

//理论转动惯量计算
function rotationalAo_inertia_in_theory_calculate(R_T_M, R_T_R) {
    //单位转化

    R_T_M =math.chain(R_T_M).multiply(0.001).done();
    R_T_R = math.chain(R_I_R).multiply(0.01).done();

    //R_T_M = R_T_M * 0.001;
    //R_T_R = R_T_R * 0.01;

    let res = 0;
    res=math.bignumber(res);
    res=math.chain(0.5).multiply(R_T_M).multiply(R_T_R).multiply(R_T_R).done();
    res=res.toFixed(6);
    return res;
}


function rotationalBo_inertia_in_theory_calculate(R_T_M,R_T_Rb,R_T_rb){
    let R_T_R=0;
    R_T_R=math.bignumber(R_T_R);



    R_T_M =math.chain(R_T_M).multiply(0.001).done();
    R_T_Rb = math.chain(R_T_Rb).multiply(0.01).done();
    R_T_rb = math.chain(R_T_rb).multiply(0.01).done();

    //R_T_M = R_T_M * 0.001;
    //R_T_R = R_T_R * 0.01;
    R_T_Rb = math.chain(R_T_Rb).multiply(R_T_Rb).done();
    R_T_rb = math.chain(R_T_rb).multiply(R_T_rb).done();
    R_T_R=math.sum(R_T_rb,R_T_Rb);



    let res = 0;
    res=math.bignumber(res);
    res=math.chain(0.5).multiply(R_T_M).multiply(R_T_R).done();
    res=res.toFixed(6);
    return res;
}
//主函数
function __main__rotational_inertia_calculate(m_a,m_b,T_a,T_ab,Ra,Rb,R,r,rb,L) {
    const g = 0; //重力加速度（单位）
    g=math.bignumber(g);
    m_a = math.bignumber(m_a); //圆盘a的质量（g）
    m_b =math.bignumber(m_b); //圆盘b的质量（g）

    T_a = math.bignumber(T_a); //圆盘a的扭摆周期（s）
    T_ab = math.bignumber(T_ab);

    let J_a = 0; //圆盘a的平均转动惯量
    let J_ab = 0; //圆盘a和b的平均转动惯量
    J_a=math.bignumber(J_a);
    J_ab =math.bignumber(J_ab);

    //意义未明确的物理量
    Ra = math.bignumber(Ra); //(cm)
    Rb = math.bignumber(Rb); //(cm)
    rb =math.bignumber(rb); //(cm)
    R = math.bignumber(R); //（cm）
    r = math.bignumber(r); //(cm)
    L =math.bignumber(L); //(cm)

    //let T_ab = 0; //圆盘a和b的扭摆周期（s）

   
    let Th_J_Ao = 0; //理论转动惯量
    let Th_J_Bo = 0; //理论转动惯量
    Th_J_Bo =math.bignumber(Th_J_Bo);
    Th_J_Ao=math.bignumber(Th_J_Ao);


    J_a = rotational_inertia_calculate(m_a, R, r, T_a, L);
    J_ab = rotational_inertia_calculate(m_a+m_b,R, r, T_ab, L);

    Th_J_Ao = rotationalAo_inertia_in_theory_calculate(m_a, Ra);
    Th_J_Bo= rotationalBo_inertia_in_theory_calculate(m_b,Rb,rb);

    return{
        "J_a":J_a,
        "J_ab":J_ab,
        "Th_J_Ao":Th_J_Ao,
        "Th_J_Bo":Th_J_Bo,
    };
}
