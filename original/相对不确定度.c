#define _CRT_SECURE_NO_WARNINGS 1
#include<stdio.h>
#include <math.h>
int main() {
	//���ó��ȵ�λ��Ϊ���ף��ˣ�gΪ���ʵ�λ
	double c_g = 9.7915;
	//����
	double c_O_m=0.05773;
	double c_m = 9.3;
	//������
	double c_O_b=0.011547;
	double c_b=24.68;
	//���������
	double c_O_d = 0.00284809;
	double c_d=0.9128;
	//�Ƕ�
	double c_O_a_2a=0;
	double c_a_2a=0.01268;
	//���۳���
	double c_O_l=0.28867;
	double c_l=210.5;
	//Ϊ������
	double c_a=12.32;
	//����������
	
	printf("�����������������׻��߿�,����Ƕ�ʱ����Ŵ�10000��������\n");
	printf("�����������b\n");
	scanf("%lf", &c_b);
	printf("���������������d\n");
	scanf("%lf", &c_d);
	printf("������Ƕ�\n");
	scanf("%lf", &c_a_2a);
	printf("������Ƕȵ���Բ�ȷ����* 10000\n");
	scanf("%lf", &c_O_a_2a);
	printf("���������۳���l\n");
	scanf("%lf", &c_l);
	
	printf("������Ƕȵ���Բ�ȷ����* 10000\n");
	scanf("%lf", &c_O_a_2a);


	//�������ƽ����(��ϵ��)
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
	printf("���Ϊδ�������ҷŴ���100000000��ֵ");
}
