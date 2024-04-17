

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
    // A_d= A_d.match(/\d+\.\d+/g);
    // A_D= A_D.match(/\d+\.\d+/g);
    B_l =math.bignumber(B_l);
    A_d =math.bignumber(A_d);
    A_D =math.bignumber(A_D);
    A_m =math.bignumber(A_m);
    k =math.bignumber(k);
    T1 =math.bignumber(T1);
    T2 =math.bignumber(T2);

    let temp = math.chain(4).multiply(A_d).add(A_D).done();
    
    let fenzi = math.chain(2).multiply(c).multiply(temp).multiply(k).multiply(A_m).multiply(B_l).done();
    // 2 * c * (A_D + (4 * A_d)) * k * A_m*B_l;
    temp = math.chain(2).multiply(A_d).add(A_D).done();
    let fenmu = math.chain(PI).multiply(A_D).multiply(A_D).multiply(temp).multiply(math.subtract(T1, T2)).done();
    // PI * A_D * A_D * (A_D + (2 * A_d)) * (T1 - T2);
    let lamu = math.divide(math.divide(fenzi, fenmu), 10);
    return {
        "result": lamu.toFixed(6)   
    };
}


