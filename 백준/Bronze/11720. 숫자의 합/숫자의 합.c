#include<stdio.h>

int main(){
	char a[10000];
	int num=0;
	int sum=0;
	scanf("%d",&num);
	scanf("%s",a);
	for(int i=0; i<num; i++){	
		
    a[i]=(int)a[i];
		a[i]=a[i]-48;
		sum+=a[i];
	}
	printf("%d",sum);
}