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
	
	printf("������l\n");
	scanf("%lf", &y_l);
	printf("������a/2 \n");
	scanf("%lf", &y_a_);
	printf("������b\n");
	scanf("%lf", &y_b);
	printf("������d\n");
	scanf("%lf", &y_d);



	double y_ii = y_l - y_a_;
	y_ii = y_ii*y_ii;
	double y_fenzi = 12 * y_m * y_g * y_ii * 1000;
	y_d = y_d * y_d * y_d;
	double y_fenmu=y_b*y_d;

	/*while (1) {*/
		double y_a_a=0;
		printf("������a_a\n");
		scanf("%lf", &y_a_a);
		//
		y_E = y_fenzi / (y_fenmu*y_a_a);
		printf("%.6f\n", y_E);
		/*
	}*/
}