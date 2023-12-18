#include <iostream>
#include <string>
using namespace std;

//main(){
//	int s=0;
////	int n;
////	cout<<"Nhap n = ";
////	cin>>n;
//	for(int i=0;i<=5;i++){
//		s=s+i;
//		cout<< i <<" "; 	
//	}
//	cout<<"\nTong = "<<s;
//	return 0;
//}



//main(){
//	int a,b,c;
//	int s=0;
//	cout<<"Nhap a = "; cin>>a;
//	cout<<"Nhap b = "; cin>>b;
//	cout<<"Nhap c = "; cin>>c;
//	s=a+b+c;
//	cout<<"Tong 3 so a b c la: "<<s;
//	return 0;
//}


//main(){
//	int s=0;
//	int myNum[4]={1,4,5,7};
//	for(int i=0;i<4;i++){
//		s=s+myNum[i];
//	}
//	cout<<"Tong = "<<s;
//	return 0;
//}

//tao function truoc khi vao ct;


//void myfunction(){
//	cout<<"Hom nay troi dep qua";
//	
//}
//
//main(){
//	myfunction(); //Goi function do
//	return 0;
//}



//void myFunction(string fName,int age){
//	cout<<fName <<" Nguyen "<<" "<<age<<"years old";
//}
//main(){
//	myFunction("Chau",10);
//	myFunction("\nHoa",12);
//	myFunction("\nAnh",14);
//	return 0;
//}

//Tinh giai thua 
int giaiThua(int num) {
  if (num > 0) {
    return  num+ giaiThua(num - 1);
  } else {
    return 0;
  }
}

int main() {
  int result = giaiThua(3);
  cout << result;
  return 0;
}










