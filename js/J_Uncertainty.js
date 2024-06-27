function calculate_unC(T, T_O, m, m_O, L, L_O, R, R_O, r, r_O) {
    let c_T = 0;
    c_T = math.bignumber(c_T);
    c_T = math.chain(T_O ).divide(T).done();
    c_T = math.chain(c_T).multiply(c_T).multiply(4).done();

    m = math.chain(m).multiply(0.001).done(); // g -> kg
    let c_m = 0;
    c_m=math.bignumber(c_m);
    c_m = math.chain(m_O).divide(m).done();
    c_m = math.chain(m_O).multiply(c_m).done();

    L = math.chain(L).multiply(0.01).done(); // cm -> m
    let c_L = 0;
    c_L =math.bignumber(c_L);
    c_L= math.chain(L_O).divide(L).done();
    c_L= math.chain(c_L).multiply(c_L).done();    
  

    R = math.chain(R).multiply(0.01).done(); // cm -> m
    let c_R = 0;
    c_R =math.bignumbe(c_R);
    c_R = math.chain(R_O).divide(R).done();
    c_R = math.chain(c_R).multiply(c_R).done();

    r = math.chain(r).multiply(0.01).done(); // cm -> m
    let c_r =0; 
    c_r =math.bignumber(c_r); 
    c_r= math.chain(r_O).divide(r).done();
    c_r= math.chain(c_r).multiply(c_r).done();

    let c_sum = 0;
    c_sum=math.bignumber(c_sum);
    c_sum=(math.sqrt(math.sum(c_T + c_m + c_L + c_R + c_r ))).toFixed(6);
    return c_sum;
}

function calculate_unC_ab(T, T_O, m_a, m_a_O, m_b, m_b_O, L, L_O, R, R_O, r, r_O) {
    let c_T = 0;
    c_T =math.bignumber(c_T); 
    c_T= math.chain(T_O).divide(T).done();
    c_T= math.chain(c_T).multiply(c_T).multiply(4).done();

    let m_O =0;
    let m_oo=0;
    m_O =math.bignumber(m_O); 
    m_O= math.chain( m_a_O).multiply(m_a_O).done();   

    m_oo =math.bignumber(m_oo); 
    m_oo= math.chain(m_b_O).multiply(m_b_O).done();   

    m_O= math.sum(m_O,m_oo);


    let m = 0;
    m =math.bignumber(m); 
    m= math.sum(m_b,m_a);
    m= math.chain(m).multiply(0.001).done();// g -> kg
    m= math.chain(m).multiply(m).done();

 
    let c_m =0;
    c_m =math.bignumber(c_m); 
    c_m= math.chain(m_O).divide(m).done();

    L = math.chain(L).multiply(0.01).done(); // cm -> m

    let c_L = 0;
    c_L =math.bignumber(c_L); 
    c_L= math.chain(L_O).divide(L).done();
    c_L= math.chain(c_L).multiply(c_L).done();   
  

    R = math.chain(R).multiply(0.01).done(); // cm -> m
    let c_R = 0;
    c_R =math.bignumber(c_R); 
    c_R= math.chain(R_O).divide(R).done();
    c_R= math.chain(c_R).multiply(c_R).done();  


    r = math.chain(r).multiply(0.01).done(); // cm -> m
    let c_r = 0;
    c_r =math.bignumber(c_r); 
    c_r= math.chain(r_O ).divide(r).done();
    c_r= math.chain(c_r).multiply(c_r).done();     
  

    let c_sum = 0;
    c_sum =math.bignumber(c_sum); 
    c_sum=(math.sqrt(math.sum(c_T + c_m + c_L + c_R + c_r ))).toFixed(6);
    return c_sum;
}


function __main__calculate_unJ (T_a,T_ab,T_a_O,T_ab_O,m_a_O,m_b_O,m_a,m_b,L,L_O,R_O,R,r,r_O,J_a,J_ab){
    J_a=math.bignumbe(J_a);
    J_ab=math.bignumbe(J_ab);

    T_a = math.bignumber(T_a ); // a的扭摆周期
    T_ab = math.bignumber(T_ab);
    T_a_O = math.bignumber(T_a_O ); // a的扭摆周期的不确定度
    T_ab_O =math.bignumber(T_ab_O);
    
    m_a_O = math.bignumber(m_a_O ); // a的质量的相对不确定度
    m_b_O = math.bignumber(m_b_O );
    m_a = math.bignumber(m_a ); // a的质量
    m_b = math.bignumber(m_b );
    
    L = math.bignumber(L); // l的长度
    L_O = math.bignumber(L_O); // l的长度的相对不确定度
    
    R_O = math.bignumber(R_O); // R的大小的相对不确定度
    R = math.bignumber(R); // R的大小
    r = math.bignumber(r); // r的大小
    r_O = math.bignumber(r_O);
    
    let E_ja = 0;
    let E_jab = 0;
    let sigma_ja = 0;
    let sigma_jab = 0;
    let sigma_jb=0;
    let sigma_ja__ = 0;
    let sigma_jab__ = 0;
    sigma_jb = math.bignumber(sigma_jb);
    E_ja = math.bignumber(E_ja);
    E_jab = math.bignumber(E_jab);
    sigma_ja = math.bignumber(sigma_ja);
    sigma_jab = math.bignumber(sigma_jab);
    sigma_ja__ = math.bignumber(sigma_ja__);
    sigma_jab__ = math.bignumber(sigma_jab__);



E_ja = (calculate_unC(T_a, T_a_O, m_a, m_a_O, L, L_O, R, R_O, r, r_O)).toFixed(6);
E_jab = (calculate_unC_ab(T_ab, T_ab_O, m_a, m_a_O, m_b, m_b_O, L, L_O, R, R_O, r, r_O)).toFixed(6);
sigma_ja=(math.chain(E_ja).multiply(sigma_ja).done()).toFixed(6); 
sigma_jab=(math.chain(E_jab).multiply(sigma_jab).done()).toFixed(6);
sigma_ja__=math.chain(sigma_ja).multiply(sigma_ja).done();
sigma_jab__=math.chain(sigma_jab).multiply(sigma_jab).done();
sigma_jb=(math.sqrt(math.sum(sigma_ja__,sigma_jab__))).toFixed(6);

return{
    "E_ja":E_ja,
    "E_jab":E_jab,
    "sigma_ja":sigma_ja,
    "sigma_jab":sigma_jab,
    "sigma_jb":sigma_jb,
};
}