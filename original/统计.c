#define _CRT_SECURE_NO_WARNINGS 1
#include<stdlib.h>
#include<stdio.h>
#include"node.h"
#include<math.h>
//typedef struct node{
//int value;
//struct node* tail;
//}Node;
// 
//typedef struct list_M_n {
//	Node** pHead;
//	Node** ptail;
//}M_N;
double t_set[22] = {0,0,1.84,1.32,1.20,1.14,1.11,1.09,1.08,1.07,1.06,0,1.05,0,0,1.04,0,0,0,0,1.03,1};
int main() {
	double number;
	M_N list;
	(&list)->pHead = NULL;
	(&list)->pTail = NULL;
	(&list)->count = 0;
	list.AV = 0;
	list.FC = 0;
	list.BQ = 0;
	list.Ex = 0;
	printf("���������ݣ��������ʾ�˳�\n");
	//��������
	do {
		printf("�����%d������\n", (list.count)+1);
		scanf("%lf", &number);
		if (number != 0) {
			n_setup_ll(&list, number);
		}
		else {
			printf("\n");
			break;
		}
	} while (1);
	/*
	//����ɾ������
	printf("��������ɾ�������ݵ���ţ���������0ʱ�˳�\n");
	do {
		int can_num;
		printf("���������\n ");
		scanf("%d", &can_num);
		if (can_num) {
			cancel_ll_order(&list, can_num);
		}
		else {
			printf("�˳�ɾ��\n");
			break;
		}
	} while (1);
	//��������
	printf("�����������ӵ����ݣ���������0ʱ�˳�\n");
	do {
		double num=0;
		printf("�����%d������\n", (list.count) + 1);
		scanf("%lf", &num);
		if ((int)num != 0) {
			n_setup_ll(&list, number);
		}
		else {
			printf("�˳�\n");
			break;
		}

	} while (1);
	*/
	faverage(&list);
	list.t_m = t_set[list.count];
	printf("ƽ������ %f\n", list.AV);
	fFangCha(&list);
	fEx(&list);
	printf("������ %f(/10**6)\n", list.FC);
	printf("δ����ϵ���ľ��Բ�ȷ������ %f(/10**3)\n", list.row_BQ);
	printf("���Բ�ȷ������ %f(/10**3)\n", list.BQ);
	printf("��Բ�ȷ������ %f(/10**3)\n", list.Ex);
	printf("�������ݸ����� t(m)��\n ");
	printf("%.6f\n", t_set[list.count]);
	free_l_l((&list)->pHead);

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
void faverage(M_N* pList) {
	double sum=0;
	double average;
	Node* Head = pList->pHead;
	if (Head == NULL) {
		printf("please enter another pointer!!\n");
	}
	while (Head) {
		sum += (Head->value);
		Head = Head->tail;
	}
	average = sum / (pList->count);
	pList->AV = average;
}
void fFangCha(M_N* pList){
	double dedle;
	double current;
	double sum=0;
	Node* Head = pList->pHead;
	if (Head == NULL) {
		printf("please enter another pointer!!\n");
	}
	while (Head) {
		current = ((Head->value)-(pList->AV))*1000;//������ƽ�����Ĳ�Ŵ�1000����
		dedle = pow(current, 2);//���ƽ��
		sum += dedle;//ƽ����
		Head = Head->tail;//ָ��ָ����һ��
	}
	(pList->FC) = sum ;
	//������Բ�ȷ����
	pList->BQ = sum / ((pList->count) * (pList->count - 1));
	pList->BQ =sqrt(pList->BQ);
	pList->row_BQ = (pList->BQ);
	pList->BQ = (pList->BQ) * (pList->t_m);//������������


}
void fEx(M_N* pList){
	double bbq = pList->BQ;
	double pjj = pList->AV;
	pList->Ex = bbq / pjj;
}
void cancel_ll(M_N* pList,double num) {
	/*int num;
	printf("����������ɾ��������\n ");
	scanf("%d", &num);
	*/
	//�ڽṹ���涨������ָ��ֱ�ָ���ɾ������ǰһ���Լ���һ��
	P_s p_s;
	p_s.back = NULL;
	p_s.check = 0;
	p_s.current = NULL;
	p_s.front = NULL;
	_find_p(pList, &p_s, num);
	//�ж��Ƿ����
	if (p_s.check) {
		//��ǰ�������
		if (p_s.front && p_s.back) {
			p_s.front->tail = p_s.back;
		}
		//��Ϊ��һ��
		if ((p_s.front) == NULL && (p_s.back) == NULL) {
			pList->pHead = (p_s.current->tail);
		}
		//��Ϊ���һ��
		if (p_s.front && ((p_s.back) == NULL)) {
			p_s.front->tail = NULL;
		}
		free(p_s.current);
		printf("�ɹ�ɾ��\n");
		pList->count--;
	}
	else {
		printf("ɾ��ʧ�ܣ������ݲ����ڣ�����������\n");
	}
	
	
}
void _find_p(M_N* pList, P_s* p_pl, double target) {
	p_pl->current = (pList->pHead);
	if (pList->pTail != pList->pHead)
	{
		do {
			p_pl->front = (p_pl->current);
			p_pl->current = p_pl->current->tail;
			p_pl->back = p_pl->current->tail;
		} while ((p_pl->back != NULL) && ((p_pl->current->value) != target));
	}
	if ((p_pl->current) != NULL && p_pl->current->value == target) {
		p_pl->check = 1;
		printf("�ҵ�Ŀ������\n");
	}
	else {
		printf("����ʧ�ܣ������ݲ�����\n");
	}
}
void _find_order(M_N* pList, P_s* p_pl, int order){
	//����׼��
	Node* hhead = NULL ;
	Node* ccurrent = pList->pHead;
	Node* bback = NULL;
	//ѭ��Ѱ��λ��
	if ((pList->count) > order || (pList->count) == order) {
		p_pl->check = 1;
		for (int i = 1; i < order; i++) {
			//�ж�ָ���Ƿ�Խ��
			if (ccurrent) {
				//
				if (i == order - 1) {
					hhead = ccurrent;
				}
				//������ָ��
				ccurrent = ccurrent->tail;
			}
		}
		if (ccurrent->tail) {
			bback = ccurrent->tail;
		}
	}
	else {
		printf("����Խ�磬��Ч������ʧ��\n");
	}
}
void cancel_ll_order(M_N* pList, int order) {
	P_s p_s;
	p_s.back = NULL;
	p_s.check = 0;
	p_s.current = NULL;
	p_s.front = NULL;
	_find_order(pList, &p_s, order);
	//����ҵ���
	if (p_s.check) {
		//���ʱ��һ��
		if (order == 1) {
			pList->pHead = p_s.back;
		}
		//��������һ��
		else if(order==pList->count){
			pList->pTail = p_s.front;
		}//���м�������ǰ��
		else {
			p_s.front->tail = p_s.back;
		}
		//��������һ
		free(p_s.current);
		pList->count--;
	}
	else {
		printf("����Խ�磡����������!��\n");
	}
}

