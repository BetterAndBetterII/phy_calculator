


const PI = Math.acos(-1);
function REDAO(B_l, A_d, A_D, A_m, k, T1, T2) {
    const c = 896;
    let fenzi = 2 * c * (A_D + (4 * A_d)) * k * A_m;
    let fenmu = PI * A_D * A_D * (A_D + (2 * A_d)) * (T1 - T2);
    let lamu = (fenzi / fenmu) * 10;
    return lamu;
}

let B_l = 0;
let A_d = 0;
let A_D = 0;
let A_m = 0;
let c = 896;
let k = 0;
let T1 = 0;
let T2 = 0;

B_l = parseFloat(prompt("Enter B's thickness (in cm):"));
A_d = parseFloat(prompt("Enter A's height (in cm):"));
A_D = parseFloat(prompt("Enter A's diameter (in cm):"));
A_m = parseFloat(prompt("Enter A's mass (in g):"));
k = parseFloat(prompt("Enter the slope (K/s):"));
T1 = parseFloat(prompt("Enter T1:"));
T2 = parseFloat(prompt("Enter T2:"));

let res = REDAO(B_l, A_d, A_D, A_m, k, T1, T2);
console.log("The result is: " + res);

