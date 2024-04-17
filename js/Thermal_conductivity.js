


const PI = Math.acos(-1);
let B_l = 0;
let A_d = 0;
let A_D = 0;
let A_m = 0;
let c = 896;
let k = 0;
let T1 = 0;
let T2 = 0;
function REDAO(B_l, A_d, A_D, A_m, k, T1, T2) {
    const PI = Math.acos(-1);
    const c = 896;
    let fenzi = 2 * c * (A_D + (4 * A_d)) * k * A_m*B_l;
    let fenmu = PI * A_D * A_D * (A_D + (2 * A_d)) * (T1 - T2);
    let lamu = (fenzi / fenmu) / 10;
    return {
        "result": lamu
    };
}


