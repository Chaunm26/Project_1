
//toán tử 3 ngôi: Ternary operator

// var course= {
//     Name: 'Javascript', coin:300

// }

// if (course.coin>0) {
//     console.log(`${course.coin} Coins`)
// }
// else{
//     console.log('Miễn Phí')
// }

// var result = course.coin> 0 ? `${course.coin} Coins`: 'Miễn phí';
// console.log(result);


// output = 1 -->1000

// for(var i = 0; i<1000; i++) {
//     console.log(i);
// }
//
// var myArray = [
//     'Js', 'PHP','Ruby','React','Html', 'Java'
// ]

// var arrayLength=myArray.length;
// for(var i = 0;i<arrayLength;i++){
//     console.log(myArray[i]);
// }
// for(var key in myArray){
//     console.log(myArray[key])
// }
// for(var value of myArray){
//     console.log(value);

// }

var i = 0; 
var isSucessful = false;
do{
    i++;
    console.log('Nap the lan'+ i);
    //thành công
    if(true){
        isSucessful = true;
    } 
} while(! isSucessful && i<3);