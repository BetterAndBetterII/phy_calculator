#define _CRT_SECURE_NO_WARNINGS 1
#include <stdio.h>
#include<math.h>
#define PI acos(-1)//定义圆周率

double rotational_inertia_calculate(double R_I_m,double R_I_R,double R_I_r,double R_I_T,double R_I_L);//计算转动惯量
//注意单位？！！！
double rotational_inertia_in_theory_calculate(double R_T_M,double R_T_R);
int main() {
	double g = 0;//重力加速度（单位）

	double m_a = 0;//圆盘a的质量（g）
	double T_a = 0;//圆盘a的扭摆周期（s）
	double J_a = 0;//圆盘a的平均转动惯量
	double Th_J_a=0;//理论转动惯量
	
	//意义未明确的物理量
	double Ra = 0;//(cm)
	double Rb = 0;//(cm)
	double rb = 0;//(cm)
	double R = 0;//（cm）
	double r = 0;//(cm)
	double L = 0;//(cm)

	//

	double m_b = 0;//圆盘b的质量(g)

	double T_ab = 0;//圆盘a和b的扭摆周期（s）
	double J_ab = 0;//圆盘a和b的平均转动惯量
	double Th_J_b=0;//理论转动惯量
	
	J_a=rotational_inertia_calculate(m_a,R,r,T_a,L);
	J_ab=rotational_inertia_calculate(m_a+m_b,R,r,T_ab,L);

	Th_J_a=rotational_inertia_in_theory_calculate(m_a,Ra);
	Th_J_b=rotational_inertia_in_theory_calculate(m_b,Rb);

}
double rotational_inertia_calculate(double R_I_m, double R_I_R, double R_I_r, double R_I_T, double R_I_L) {
	//未考虑单位转化

	double g = 0;//重力加速度
	double res = 0;
	//数据单位处理
	//g->kg
	R_I_m=R_I_m*0.001;
	//cm->m
	R_I_r=R_I_r*0.01;
	R_I_R=R_I_R*0.01;
	
	R_I_T = R_I_T * R_I_T;
	double fenzi = R_I_m * g * R_I_R * R_I_r * R_I_T;
	double fenmu = 4 * PI * PI * R_I_L;
	res = fenzi / fenmu;
	return res;
}



double rotational_inertia_in_theory_calculate(double R_T_M,double R_T_R){
	//单位转化
	R_T_M=R_T_M*0.001;
	R_T_R=R_T_R*0.01;

	double res=0.5*R_T_M*R_T_R*R_T_R;
	return res;
}


