

const PI =math.bignumber(math.acos(-1));
let B_l = 0;
let A_d = 0;
let A_D = 0;
let A_m = 0;
let c = 896;
let k = 0;
let T1 = 0;
let T2 = 0;
function REDAO(B_l, A_d, A_D, A_m, k, T1, T2) {
    const c = 896;
    A_d= A_d.match(/\d+\.\d+/g);
    A_D= A_D.match(/\d+\.\d+/g);
    B_l =math.bignumber(B_l);
    A_d =math.bignumber(A_d);
    A_D =math.bignumber(A_D);
    A_m =math.bignumber(A_m);
    k =math.bignumber(k);
    T1 =math.bignumber(T1);
    T2 =math.bignumber(T2);
    
    let fenzi = 2 * c * (A_D + (4 * A_d)) * k * A_m*B_l;
    let fenmu = PI * A_D * A_D * (A_D + (2 * A_d)) * (T1 - T2);
    let lamu = (fenzi / fenmu) / 10;
    lamu =math.bignumber(lamu);
    return {
        "result": lamu
    };
}


