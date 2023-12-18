

var courses = [
    {
        id:1,
        name:'Javascript',
        coin: 0
    },
    {
        id:2,
        name:'HTML, CSS',
        coin: 0
    },
    {
        id:3,
        name:'Ruby',
        coin: 0
    },
    {
        id:4,
        name:'PHP',
        coin: 0
    },
    {
        id:5,
        name:'ReaactJS',
        coin: 0
    },
    {
        id:6,
        name:'Ruby',
        coin: 0
    },
    {
        id:7,
        name:'Ruby',
        coin: 0
    },
];

// courses.forEach(function(course){
//     console.log(course);
// });//Callback

// var isFree=courses.find(function(course){
  
//     return course.name==='Ruby';
    
// });
// console.log(isFree)

var newCourse = courses.map(function(course,index){
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        gia: course.coin,
        coinText: `Gia: ${course.coin}`
        
    };
});
//document.write(newCourse);
console.log(newCourse);


