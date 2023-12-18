


function changeColor(color){
    var elm = document.getElementById('heading');
    elm.style.color= color;
}

var hinh2 = "https://hoanguyethy.com/wp-content/uploads/2020/02/hoa-hong-vang-1-1024x768.jpg";
var hinh1 = "https://hoanguyethy.com/wp-content/uploads/2020/02/hoa-hong-vang.jpg";

document.getElementById('1').onclick=function(){
    document.getElementById('hinhanh').src = hinh1;
}
document.getElementById('2').onclick= function(){
    document.getElementById('hinhanh').src = hinh2;
}
