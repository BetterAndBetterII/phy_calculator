#define _CRT_SECURE_NO_WARNINGS 1
#include<stdlib.h>
#include<stdio.h>
#include"tan.h"
#include<math.h>
double t_set[22] = { 0,0,1.84,1.32,1.20,1.14,1.11,1.09,1.08,1.07,1.06,0,1.05,0,0,1.04,0,0,0,0,1.03,1 };
int main() {
	
	// Ϊ��������ݶԣ�hn��xn
	double number1;
	double number2;
	//Ϊ���������ֵ
	double tana;
	double res;
	M_N list;
	(&list)->pHead = NULL;
	(&list)->pTail = NULL;
	(&list)->count = 0;
	list.AV = 0;
	list.FC = 0;
	list.BQ = 0;
	list.Ex = 0;
	printf("���������ݣ����ݶ��ԡ�num1,num2����ʽ����,num1 Ϊhn, num2Ϊxn����λ��mm������num1=0ʱ�˳�\n");
	//���ó�ʼ�Ƕ�
	printf("�����%d�����ݶ�\n", (list.count) + 1);
	scanf("%lf,%lf", &number1, &number2);
	res = number2 / number1;
	n_setup_ll(&list, res);
	tana = res;
	//��������
	do {
		printf("�����%d�����ݶ�\n", (list.count) + 1);
		scanf("%lf,%lf", &number1,&number2);
		/*
		//��߼��㾫��
		number1 *=1000;
		number2 *= 1000;
		*/
		if ((int)number1!= 0) {
			res = number2 / number1;
			n_setup_ll(&list, res);
		}
		else {
			printf("\n");
			break;
		}
	} while (1);
	//�����Ӧ�ĽǶȣ������
	double angle_2na;//����Ƕȣ��������
	for (Node* for_head =( list.pHead->tail); for_head; for_head = for_head->tail) {
		angle_2na = angle(tana, (for_head->value));
		printf("%.6f(/10000)\n", angle_2na);
	}



	//�����ͷſռ�
	free_l_l((&list)->pHead);



		/*
	// Ϊ��������ݶԣ�hn��xn
	double number1;
	double number2;
	//Ϊ���������ֵ
	double res;
	scanf("%lf,%lf", &number1, &number2);
	while ((int) number1 != 0) {
		res = number2 / number1;
		
		printf("%.6f\n", res);
		scanf("%lf,%lf", &number1, &number2);
		*/

	}


void free_l_l(Node* Head) {
	if (Head) {
		Node* _head_ = Head->tail;
		do {
			free(Head);
			Head = _head_;
			if (_head_) {
				_head_ = _head_->tail;
			}
			else {
				break;
			}
		} while (Head);
		printf("done!\n");
	}
	else {
		printf("this linked-list is empty\n");
	}
}
void n_setup_ll(M_N* pList, double number) {
	//����ռ䣬����ʼ���ṹ
	Node* p = (Node*)malloc(sizeof(Node));
	/**/

	/**/
	if (p) {
		pList->count++;//���ڼ���
		p->tail = NULL;
		p->value = number;
		//�����һ���ṹ
		if (pList->pHead == NULL) {
			pList->pHead = p;
			pList->pTail = p;
		}
		else {
			(pList->pTail)->tail = p;
			pList->pTail = p;
		}
	}
	else {
		printf("lack of memory\n,and now break\n");
	}

}
double angle(double f_tana, double f_tanx) {
	double res_angle;
	double fenzi = (f_tana*10000) - (f_tanx*10000);
	double fenmu = 1 +( f_tana * f_tanx);
	res_angle = fenzi / fenmu;
	return res_angle;
}