#define _CRT_SECURE_NO_WARNINGS 1
#include<stdlib.h>
#include<stdio.h>
#include"tan.h"
#include<math.h>
double t_set[22] = { 0,0,1.84,1.32,1.20,1.14,1.11,1.09,1.08,1.07,1.06,0,1.05,0,0,1.04,0,0,0,0,1.03,1 };
int main() {
	
	// 为输入的数据对，hn与xn
	double number1;
	double number2;
	//为计算的正切值
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
	printf("请输入数据，数据对以“num1,num2”形式输入,num1 为hn, num2为xn，单位是mm；输入num1=0时退出\n");
	//设置初始角度
	printf("输入第%d个数据对\n", (list.count) + 1);
	scanf("%lf,%lf", &number1, &number2);
	res = number2 / number1;
	n_setup_ll(&list, res);
	tana = res;
	//输入数据
	do {
		printf("输入第%d个数据对\n", (list.count) + 1);
		scanf("%lf,%lf", &number1,&number2);
		/*
		//提高计算精度
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
	//计算对应的角度，并输出
	double angle_2na;//储存角度，用来输出
	for (Node* for_head =( list.pHead->tail); for_head; for_head = for_head->tail) {
		angle_2na = angle(tana, (for_head->value));
		printf("%.6f(/10000)\n", angle_2na);
	}



	//进行释放空间
	free_l_l((&list)->pHead);



		/*
	// 为输入的数据对，hn与xn
	double number1;
	double number2;
	//为计算的正切值
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
	//申请空间，并初始化结构
	Node* p = (Node*)malloc(sizeof(Node));
	/**/

	/**/
	if (p) {
		pList->count++;//用于计数
		p->tail = NULL;
		p->value = number;
		//找最后一个结构
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