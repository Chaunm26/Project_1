function myFunction(param){
    if (typeof param ==='function'){
        param('Haha');
    }
    
}

function myCallback(value){
    console.log('value: ', value)
}
myFunction(myCallback);