#define _CRT_SECURE_NO_WARNINGS 1
#include<stdio.h>
#include <math.h>
int main() {

	int check = 0;
	//���ó��ȵ�λ��Ϊ���ף��ˣ�gΪ���ʵ�λ
	double T_a = 0;//a��Ť������
	double T_a_O = 0;//a��Ť�����ڵĲ�ȷ����
	
	double m_a_O = 0.;//a����������Բ�ȷ����
	double m_a = 0;//a������


	double L = 0;//l�ĳ���
	double L_O = 0;//l�ĳ��ȵ���Բ�ȷ����

	//���������
	double R_O = 0;//R�Ĵ�С����Բ�ȷ����
	double R = 0;//R�Ĵ�С
	//�Ƕ�
	double r = 0;//r�Ĵ�С
	double r_O = 0;//r�Ĵ�С����Բ�ȷ����
	printf("�Ƿ���м��㣬��������1\n");
	scanf("%d", &check);
	while (check == 1) {
		printf("������\n");
		scanf("%lf", &T_a);
		printf("������Ĳ�ȷ����\n");
		scanf("%lf", &T_a_O);

		printf("������Ĳ�ȷ����\n");
		scanf("%lf", &m_a_O);
		printf("������\n");
		scanf("%lf", &m_a);

		printf("������\n");
		scanf("%lf", &L);
		printf("���������Բ�ȷ����\n");
		scanf("%lf", &L_O);


		printf("������\n");
		scanf("%lf", &R);
		printf("���������Բ�ȷ����\n");
		scanf("%lf", &R_O);

		printf("������\n");
		scanf("%lf", &r);
		printf("���������Բ�ȷ����\n");
		scanf("%lf", &r_O);

		/*
		printf("������Ƕȵ���Բ�ȷ����* 10000\n");
		scanf("%lf", &c_O_a_2a);
	*/

	//�������ƽ����(��ϵ��)
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
		printf("���Ϊδ�������ҷŴ���100000000��ֵ");
		printf("�Ƿ���м��㣬��������1\n");
		scanf("%d", &check);
	}
}