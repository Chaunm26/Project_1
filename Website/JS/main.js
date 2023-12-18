/*
// console.warn('Nguyen Minh Chau')

// setInterval(function() {
//     console.log('Nguyen Minh Chau'+ Math.random())
// },1000)
// var a=2;
// a/=3;
// console.log(a);
var isSuccess=1>2
if (isSuccess) {
    console.log('Dieu kien dung')
}else{
    console.log('Dieu kien sai')
}
let myString='      Nguyen Minh Chau Chau      '
console.log('length = ',myString.length)
console.log('find index = ',myString.search('Minh'))
console.log('Cut string = ',myString.slice(7,9))
console.log('Replace = ',myString.replace('Chau','Minh'))//Thay thế 1 chữ 
// console.log('Replace = ',myString.replace(/Chau/g,'Minh'))---thay thế nhiều chữ giống nhau cùng 1 lúc
console.log('Convert ro upper case = ',myString.toUpperCase())
console.log('Convert to lower case = ',myString.toLowerCase())
console.log('Trim = ',myString.trim().length)
console.log('Split = ',myString.split(''))
//console.log('Get a character by index = ',myString.charAt(10))
console.log('Split = ',myString[10])

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java',

]
var languages2=[
    'Ruby',
    'Meo_meo',
]
console.log(languages)
console.log(Array.isArray({})) //Không sử dụng được typeOf: vì cả 2 đều trả về Object
console.log(languages.length)
console.log(languages[0])//Lấy phần tử theo index
console.log(languages.toString())//Đổi về dạng chuỗi
console.log(languages.pop())//Xóa element cuối mảng và trả về phần tử đã xóa 
console.log(languages.push('Dart'))//thêm 1 hoặc nhiều phần tử cuối mảng
console.log(languages.shift())//ngược lại pop
console.log(languages.unshift('C','C++'))//thêm 1 hoặc nhiều p tử ở đầu mảng
console.log(languages.splice(1,1,'KKK'))//Chèn, xóa ở vị trí con trỏ bất kì
console.log(languages.concat(languages2))//Hợp nhất
console.log(languages.slice(-3,-2))
console.log(languages2.concat(languages))

// console.log(languages)
function showDialog() {//Tạo hàm
    alert('Hi, xin chào các bạn')
}
showDialog()//Gọi hàm

function Name(firstName, lastName){
    console.log('Hello'+' '+ firstName + ' '+lastName)
}
Name('Chau','Nguyen')
function Test(){
    var myString=''
    for(var po of arguments){
    myString += `${po} - `
    }
    console.log(myString)
}


Test('Hồng', 'Cúc', 'Mai', 'Đào')
*/
let Hi = prompt('Nhập vào tên của bạn','Tên')
alert('Heloo',Hi)
