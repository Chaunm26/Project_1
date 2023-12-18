delta=b*b-4*a*c
if delta<0:
    print("Phuong trinh vo nghiem")
elif delta == 0:
    print("Phuong trinh co nghiem kep x1 = x2 = ",-(b/2*a))
else: print ("Phuong trinh co 2 nghiem phan biet x1,x2: ",
(-(b) + math.sqrt(delta))/(2*a),',', (-(b) - math.sqrt(delta))/(2*a))