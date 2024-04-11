#define _CRT_SECURE_NO_WARNINGS 1
#include<stdio.h>
#include <math.h>
int main() {
	//所用长度单位均为毫米，克，g为国际单位
	double c_g = 9.7915;
	//质量
	double c_O_m=0.05773;
	double c_m = 9.3;
	//截面宽度
	double c_O_b=0.011547;
	double c_b=24.68;
	//悬臂梁厚度
	double c_O_d = 0.00284809;
	double c_d=0.9128;
	//角度
	double c_O_a_2a=0;
	double c_a_2a=0.01268;
	//悬臂长度
	double c_O_l=0.28867;
	double c_l=210.5;
	//为砝码宽度
	double c_a=12.32;
	//数据数输入
	
	printf("输入的数据请输入毫米或者克,输入角度时请各放大10000倍后输入\n");
	printf("请输入截面宽度b\n");
	scanf("%lf", &c_b);
	printf("请输入悬臂梁厚度d\n");
	scanf("%lf", &c_d);
	printf("请输入角度\n");
	scanf("%lf", &c_a_2a);
	printf("请输入角度的相对不确定度* 10000\n");
	scanf("%lf", &c_O_a_2a);
	printf("请输入悬臂长度l\n");
	scanf("%lf", &c_l);
	
	printf("请输入角度的相对不确定度* 10000\n");
	scanf("%lf", &c_O_a_2a);


	//计算各个平方和(带系数)
	double c_B = (c_O_b * 10000) / c_b;
	c_B = c_B * c_B;

	double c_D =(c_O_d * 10000) / c_d;
	c_D = c_D * c_D * 9;

	double c_L = (c_O_l * 10000) / (c_l-c_a);
	c_L = c_L * c_L * 4;

	double c_A_2A =(c_O_a_2a ) / c_a_2a;
	c_A_2A = c_A_2A * c_A_2A;

	double c_M = (c_O_m * 10000) / c_m;
	c_M = c_M * c_M;
	

	double c_sum = c_B + c_D + c_L + c_A_2A + c_M;
	printf("%.6f\n", c_sum);

	//
	printf("结果为未开根号且放大了100000000的值");
}
