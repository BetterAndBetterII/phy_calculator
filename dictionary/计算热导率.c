#define _CRT_SECURE_NO_WARNINGS 1
#include<stdio.h>
#include<math.h>
#define PI acos(-1)
double REDAO(double B_l, double A_d, double A_D, double A_m,double k, double T1, double T2);
int main() {
	double B_l = 0;//B�ĺ��cm
	double A_d = 0;//A�ĸ߶�cm
	double A_D = 0;//A��ֱ��cm
	double A_m = 0;//A������g
	double c = 896;//���ʵ�λ
	double k = 0;//б��(K/s)
	double T1 = 0;
	double T2 = 0;

	scnaf("%30lf", &B_l);
	scnaf("%30lf", &A_d);
	scnaf("%30lf", &A_D);
	scnaf("%30lf", &A_m);
	scnaf("%30lf", &k);
	scnaf("%30lf", &T1);
	scnaf("%30lf", &T2);

	double res = REDAO(B_l, A_d, A_D, A_m,k,T1,T2);


}
double REDAO(double B_l, double A_d, double A_D, double A_m,double k, double T1,double T2) {
	double c = 896;//���ʵ�λ
	double fenzi=0;
	fenzi = 2 * c * (A_D + (4 * A_d)) * k* A_m;
	double fenmu = 0;
	fenmu = PI * A_D * A_D * (A_D + (2 * A_d)) * (T1 - T2);
	double lamu = 0;
	lamu = (fenzi / fenmu)*10;
	return lamu;
}