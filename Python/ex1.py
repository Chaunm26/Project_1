# a=[5,7,10,20]
# b=a
# b[0]=-5
# print(b)

# import math
# print("Giai phuong trinh bac 2: ax^2+bx+c=0 (a,b khac 0)")
# print("======")
# a=float(input("Nhap a = ")) 
# while True:
#     if a==0: a=float(input("Vui long nhap so khac (a>0), a = ")) 
#     else: 
#         break

# b=float(input("Nhap b = ")) 
# while True:
#     if b==0: b=float(input("Vui long nhap so khac (b>0), b = ")) 
#     else: 
#         break

# c=float(input("Nhap c = ")) 
# delta=b*b-4*a*c
# if delta<0:
#     print("Phuong trinh vo nghiem")
# elif delta == 0:
#     print("Phuong trinh co nghiem kep x1 = x2 = ",-(b/2*a))
# else: print ("Phuong trinh co 2 nghiem phan biet x1,x2: ",
# (-(b) + math.sqrt(delta))/(2*a),',', (-(b) - math.sqrt(delta))/(2*a))

# print("tinh chu vi và dien tich HCN")
# print("=====")

# a=float(input("Nhap chieu dai: "))
# b=float(input("Nhap chieu rong: "))
# print("Dien tich HCN = ",a*b)
# print("Chu vi HCN = ",(a+b)*2)

# x=float(input("Nhap x= "))
# t=x**10+x**5+1
# print("Gia tri bieu thuc f(x) = x^10 + x^5 +1 = ",t)

a=float(input("Nhap a = "))
b=float(input("Nhap b = "))
t=a**3+b**3+a*b
print("Gia trị a^3+b^3+ab = ",t)
