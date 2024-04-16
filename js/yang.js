function calculateYang(y_l, y_a_, y_b, y_d, y_a_a,y_n) {
    console.log(`y_l: ${y_l}, y_a_: ${y_a_}, y_b: ${y_b}, y_d: ${y_d}, y_a_a: ${y_a_a}, y_n:${y_n}`)//新增砝码个数
    const y_m = math.bignumber(9.3);
    const y_g = math.bignumber(9.7915);
    y_l = math.bignumber(y_l);
    y_a_ = math.bignumber(y_a_);
    // y_a_ = math.multiply(y_a_, 0.5);
    y_b = math.bignumber(y_b);
    y_d = math.bignumber(y_d);
    

    y_a_a = math.bignumber(y_a_a);
    y_a_ = math.chain(y_a_).multiply(0.5).done();

    const y_ii = math.chain(y_l).subtract(y_a_).pow(2).done();
    console.log(`y_ii: ${y_ii}`)
    
    const y_fenzi = math.chain(y_m).multiply(y_g).multiply(y_n).multiply(y_ii).multiply(12000).done();
    
    console.log(`y_fenzi: ${y_fenzi}`)
    const y_d_cubed = math.chain(y_d).pow(3).done();
    console.log(`y_d_cubed: ${y_d_cubed}`)
    const y_fenmu = math.chain(y_b).multiply(y_d_cubed).done();
    console.log(`y_fenmu: ${y_fenmu}`)
    const res = math.chain(y_fenzi).divide(math.multiply(y_fenmu, y_a_a)).done();
    return {
        "result": res.toFixed(6),
    }
}
