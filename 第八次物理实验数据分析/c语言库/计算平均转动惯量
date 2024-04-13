#define _CRT_SECURE_NO_WARNINGS 1
#include <stdio.h>
#include<math.h>
#define PI acos(-1)//定义圆周率

double rotational_inertia_calculate(double R_I_m,double R_I_R,double R_I_r,double R_I_T,double R_I_L);//计算转动惯量
//注意单位？！！！
int main() {
	double g = 0;//重力加速度（单位）

	double m_a = 0;//圆盘a的质量（g）
	double T_a = 0;//圆盘a的扭摆周期（s）
	double J_a = 0;//圆盘a的平均转动惯量

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




}
double rotational_inertia_calculate(double R_I_m, double R_I_R, double R_I_r, double R_I_T, double R_I_L) {
	//未考虑单位转化

	double g = 0;//重力加速度
	double res = 0;
	R_I_T = R_I_T * R_I_T;
	double fenzi = R_I_m * g * R_I_R * R_I_r * R_I_T;
	double fenmu = 4 * PI * PI * R_I_L;
	res = fenzi / fenmu;
	return res;
}
