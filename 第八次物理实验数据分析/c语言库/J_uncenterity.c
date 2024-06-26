#define _CRT_SECURE_NO_WARNINGS 1
#include<stdio.h>
#include <math.h>
double calculate_unC(double T,double T_O,double m,double m_O,double L,double L_O,double R,double R_O,double r,double r_O);
double calculate_unC_ab(double T,double T_O,double m_a,double m_a_O,double m_b,double m_b_O,double L,double L_O,double R,double R_O,double r,double r_O);
int main() {

	int check = 0;
	//所用长度单位均为毫米，克，g为国际单位
	double T_a = 0;//a的扭摆周期
	double T_ab = 0;
	double T_a_O = 0;//a的扭摆周期的不确定度
	double T_ab_O = 0;

	double m_a_O = 0;//a的质量的相对不确定度
	double m_b_O = 0;
	double m_a = 0;//a的质量
	double m_b = 0;

	double L = 0;//l的长度
	double L_O = 0;//l的长度的相对不确定度

	//悬臂梁厚度
	double R_O = 0;//R的大小的相对不确定度
	double R = 0;//R的大小
	//角度
	double r = 0;//r的大小
	double r_O = 0;//r的大小的相对不确定度
	
	double E_ja=0;
	double E_jab=0;
	double sigma_ja=0;
	double sigma_jab=0;


	E_ja=calculate_unC(T_a,T_a_O,m_a,m_a_O,L,L_O,R,R_O,r,r_O);
	E_jab=calculate_unC(T_ab,T_ab_O,m_a,m_a_O,m_b,m_b_O,L,L_O,R,R_O,r,r_O);


}


double calculate_unC(double T,double T_O,double m,double m_O,double L,double L_O,double R,double R_O,double r,double r_O){

	double c_T = T_O / T;
	c_T = c_T * c_T * 4;

	m=m*0.001;//g->kg
	double c_m = m_O / m;
	c_m = c_m * c_m;

	L=L*0.01;//cm->m
	double c_L = L_O / L;
	c_L = c_L * c_L;

	R=R*0.01;//cm->m
	double c_R = (R_O) / R;
	c_R = c_R * c_R;

	r=r*0.01;//cm->m
	double c_r = r_O / r;
	c_r = c_r * c_r;


	double c_sum = c_T + c_m + c_L + c_R + c_r;
	c_sum=sqrt(c_sum);
	return c_sum;
}

double calculate_unC_ab(double T,double T_O,double m_a,double m_a_O,double m_b,double m_b_O,double L,double L_O,double R,double R_O,double r,double r_O){
	double c_T = T_O / T;
	c_T = c_T * c_T * 4;

	double m_O=m_a_O*m_a_O+m_b_O*m_b_O;
	double m=m_a+m_b;
	m=m*0.001;//g->kg
	m=m*m;
	double c_m = m_O / m;

	L=L*0.01;//cm->m
	double c_L = L_O / L;
	c_L = c_L * c_L;

	R=R*0.01;//cm->m
	double c_R = (R_O) / R;
	c_R = c_R * c_R;

	r=r*0.01;//cm->m
	double c_r = r_O / r;
	c_r = c_r * c_r;


	double c_sum = c_T + c_m + c_L + c_R + c_r;
	c_sum=sqrt(c_sum);
	return c_sum;
}




