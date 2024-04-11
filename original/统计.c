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
	printf("请输入数据，输入零表示退出\n");
	//输入数据
	do {
		printf("输入第%d个数据\n", (list.count)+1);
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
	//进行删除数据
	printf("输入你想删除的数据的序号，并在输入0时退出\n");
	do {
		int can_num;
		printf("请输入序号\n ");
		scanf("%d", &can_num);
		if (can_num) {
			cancel_ll_order(&list, can_num);
		}
		else {
			printf("退出删除\n");
			break;
		}
	} while (1);
	//增加数据
	printf("输入你想增加的数据，并在输入0时退出\n");
	do {
		double num=0;
		printf("输入第%d个数据\n", (list.count) + 1);
		scanf("%lf", &num);
		if ((int)num != 0) {
			n_setup_ll(&list, number);
		}
		else {
			printf("退出\n");
			break;
		}

	} while (1);
	*/
	faverage(&list);
	list.t_m = t_set[list.count];
	printf("平均数是 %f\n", list.AV);
	fFangCha(&list);
	fEx(&list);
	printf("方差是 %f(/10**6)\n", list.FC);
	printf("未乘以系数的绝对不确定度是 %f(/10**3)\n", list.row_BQ);
	printf("绝对不确定度是 %f(/10**3)\n", list.BQ);
	printf("相对不确定度是 %f(/10**3)\n", list.Ex);
	printf("根据数据个数， t(m)是\n ");
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
		current = ((Head->value)-(pList->AV))*1000;//计算与平均数的差（放大1000倍）
		dedle = pow(current, 2);//差的平方
		sum += dedle;//平方和
		Head = Head->tail;//指针指向下一个
	}
	(pList->FC) = sum ;
	//计算绝对不确定度
	pList->BQ = sum / ((pList->count) * (pList->count - 1));
	pList->BQ =sqrt(pList->BQ);
	pList->row_BQ = (pList->BQ);
	pList->BQ = (pList->BQ) * (pList->t_m);//乘以修正因子


}
void fEx(M_N* pList){
	double bbq = pList->BQ;
	double pjj = pList->AV;
	pList->Ex = bbq / pjj;
}
void cancel_ll(M_N* pList,double num) {
	/*int num;
	printf("请输入你想删除的数据\n ");
	scanf("%d", &num);
	*/
	//在结构里面定义三个指针分别指向待删除，其前一个以及后一个
	P_s p_s;
	p_s.back = NULL;
	p_s.check = 0;
	p_s.current = NULL;
	p_s.front = NULL;
	_find_p(pList, &p_s, num);
	//判断是否存在
	if (p_s.check) {
		//若前后均存在
		if (p_s.front && p_s.back) {
			p_s.front->tail = p_s.back;
		}
		//若为第一个
		if ((p_s.front) == NULL && (p_s.back) == NULL) {
			pList->pHead = (p_s.current->tail);
		}
		//若为最后一个
		if (p_s.front && ((p_s.back) == NULL)) {
			p_s.front->tail = NULL;
		}
		free(p_s.current);
		printf("成功删除\n");
		pList->count--;
	}
	else {
		printf("删除失败，该数据不存在，请重新输入\n");
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
		printf("找到目标数据\n");
	}
	else {
		printf("查找失败，该数据不存在\n");
	}
}
void _find_order(M_N* pList, P_s* p_pl, int order){
	//数据准备
	Node* hhead = NULL ;
	Node* ccurrent = pList->pHead;
	Node* bback = NULL;
	//循环寻找位置
	if ((pList->count) > order || (pList->count) == order) {
		p_pl->check = 1;
		for (int i = 1; i < order; i++) {
			//判断指针是否越界
			if (ccurrent) {
				//
				if (i == order - 1) {
					hhead = ccurrent;
				}
				//更新先指针
				ccurrent = ccurrent->tail;
			}
		}
		if (ccurrent->tail) {
			bback = ccurrent->tail;
		}
	}
	else {
		printf("输入越界，无效，查找失败\n");
	}
}
void cancel_ll_order(M_N* pList, int order) {
	P_s p_s;
	p_s.back = NULL;
	p_s.check = 0;
	p_s.current = NULL;
	p_s.front = NULL;
	_find_order(pList, &p_s, order);
	//如果找到了
	if (p_s.check) {
		//如果时第一个
		if (order == 1) {
			pList->pHead = p_s.back;
		}
		//如果是最后一个
		else if(order==pList->count){
			pList->pTail = p_s.front;
		}//在中间则连接前后
		else {
			p_s.front->tail = p_s.back;
		}
		//总数减少一
		free(p_s.current);
		pList->count--;
	}
	else {
		printf("输入越界！，请重新输!入\n");
	}
}

