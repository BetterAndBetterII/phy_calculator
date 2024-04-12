#define _CRT_SECURE_NO_WARNINGS 1
#include <stdio.h>
int main() {
	double y_m = 9.3;
	double y_g = 9.7915;
	/*
	double y_l;
	double y_a;
	double y_b;
	double y_d;
	double y_a_a;
	*/
	double y_l = 0;
	double y_a_=0;
	double y_b=0;
	double y_d=0;
	double y_E=0;
	double y_n=0;
	
	printf("请输入l\n");
	scanf("%lf", &y_l);
	printf("请输入a/2 \n");
	scanf("%lf", &y_a_);
	printf("请输入b\n");
	scanf("%lf", &y_b);
	printf("请输入d\n");
	scanf("%lf", &y_d);
	//输入单个砝码质量
	printf("请输入m\n");
	scanf("%lf", & y_m);
	
	printf("请输入砝码数量n\n");
	scanf("%lf", & y_n);

	double y_ii = y_l - y_a_;
	y_ii = y_ii*y_ii;
	double y_fenzi = 12 * y_m *y_n* y_g * y_ii * 1000;    //n个砝码
	y_d = y_d * y_d * y_d;
	double y_fenmu=y_b*y_d;

	/*while (1) {*/
		double y_a_a=0;
		printf("请输入2θ\n");
		scanf("%lf", &y_a_a);
		//
		y_E = y_fenzi / (y_fenmu*y_a_a);
		printf("%.6f\n", y_E);
		/*
	}*/
}
