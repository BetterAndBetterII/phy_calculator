function calculateRotationInertia(R_I_m, R_I_R, R_I_r, R_I_T, R_I_L) {
    //未考虑单位转化
    const g = 0; //重力加速度
    let res = 0;
    R_I_T = R_I_T * R_I_T;
    const fenzi = R_I_m * g * R_I_R * R_I_r * R_I_T;
    const fenmu = 4 * Math.pow(PI, 2) * R_I_L;
    res = fenzi / fenmu;
    return res;
}