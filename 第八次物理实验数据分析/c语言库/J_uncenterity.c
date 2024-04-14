#define _CRT_SECURE_NO_WARNINGS 1
#include<stdio.h>
#include <math.h>
int main() {

	int check = 0;
	//所用长度单位均为毫米，克，g为国际单位
	double T_a = 0;//a的扭摆周期
	double T_a_O = 0;//a的扭摆周期的不确定度
	
	double m_a_O = 0.;//a的质量的相对不确定度
	double m_a = 0;//a的质量


	double L = 0;//l的长度
	double L_O = 0;//l的长度的相对不确定度

	//悬臂梁厚度
	double R_O = 0;//R的大小的相对不确定度
	double R = 0;//R的大小
	//角度
	double r = 0;//r的大小
	double r_O = 0;//r的大小的相对不确定度
	printf("是否进行计算，是则输入1\n");
	scanf("%d", &check);
	while (check == 1) {
		printf("请输入\n");
		scanf("%lf", &T_a);
		printf("请输入的不确定度\n");
		scanf("%lf", &T_a_O);

		printf("请输入的不确定度\n");
		scanf("%lf", &m_a_O);
		printf("请输入\n");
		scanf("%lf", &m_a);

		printf("请输入\n");
		scanf("%lf", &L);
		printf("请输入的相对不确定度\n");
		scanf("%lf", &L_O);


		printf("请输入\n");
		scanf("%lf", &R);
		printf("请输入的相对不确定度\n");
		scanf("%lf", &R_O);

		printf("请输入\n");
		scanf("%lf", &r);
		printf("请输入的相对不确定度\n");
		scanf("%lf", &r_O);

		/*
		printf("请输入角度的相对不确定度* 10000\n");
		scanf("%lf", &c_O_a_2a);
	*/

	//计算各个平方和(带系数)
		double c_T = T_a_O / T_a;
		c_T = c_T * c_T * 4;

		double c_m = m_a_O / m_a;
		c_m = c_m * c_m;

		double c_L = L_O / L;
		c_L = c_L * c_L;

		double c_R = (R_O) / R;
		c_R = c_R * c_R;


		double c_r = r_O / r;
		c_r = c_r * c_r;


		double c_sum = c_T + c_m + c_L + c_R + c_r;
		printf("%.6f\n", c_sum);

		//
		printf("结果为未开根号且放大了100000000的值");
		printf("是否进行计算，是则输入1\n");
		scanf("%d", &check);
	}
}