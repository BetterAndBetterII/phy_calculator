function calculateYang(y_l, y_a_, y_b, y_d, y_a_a) {
    console.log(`y_l: ${y_l}, y_a_: ${y_a_}, y_b: ${y_b}, y_d: ${y_d}, y_a_a: ${y_a_a}`)
    const y_m = 9.3;
    const y_g = 9.7915;

    const y_ii = Math.pow(y_l - y_a_, 2);
    console.log(`y_ii: ${y_ii}`)
    const y_fenzi = 12 * y_m * y_g * y_ii * 1000;
    console.log(`y_fenzi: ${y_fenzi}`)
    const y_d_cubed = Math.pow(y_d, 3);
    console.log(`y_d_cubed: ${y_d_cubed}`)
    const y_fenmu = y_b * y_d_cubed;
    console.log(`y_fenmu: ${y_fenmu}`)
    return (y_fenzi / (y_fenmu * y_a_a)).toFixed(6);
}
