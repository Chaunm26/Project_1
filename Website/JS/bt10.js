var wakeuptime = 7;
var noon =12;
var lunchtime=12;
var naptime = lunchtime + 2;
var partytime ;
var evening =18;
function clock(){
    const t= new Date();
    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getSeconds();
    setTimeout("clock()",1000);
    let meridian=" AM"
    if(h>=noon){
        meridian=" PM";
    }
    document.getElementById("clock").innerHTML = h+":"+m+":"+s + meridian+"!" ;
}
clock();


{
    var time=new Date().getHours();
    var messageText;
    var image="https://static.vecteezy.com/system/resources/previews/005/176/609/non_2x/good-morning-with-cup-free-vector.jpg";

    var timeEventJS=document.getElementById("timeEvent");
    var locatImageJs=document.getElementById('anh1');

    if(time==partytime){
        img="https://cutewallpaper.org/24/party-celebration-pictures/107229722.jpg";
        messageText = "Let's party"
    } else if(time==wakeuptime){
        img="https://img.freepik.com/premium-vector/handwritten-word-time-wake-up-with-cute-bear_8043-1185.jpg?w=2000"
        messageText = "Wake up!"
    } else if(time==lunchtime){
        img="https://cdn1.vectorstock.com/i/1000x1000/43/65/time-for-lunch-design-element-for-advertising-vector-7394365.jpg"
        messageText="Let's have some lunch!";
    } else if (time==naptime){
        img="https://res.cloudinary.com/teepublic/image/private/s--eLCVDhXp--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1558545842/production/designs/4903704_0.jpg"
        messageText="Sleep tight!"
    } else if (time<noon){
        img="https://img.freepik.com/premium-vector/cartoon-alarm-clock-with-cup-hot-coffee-croissant-ringing-good-morning-text-wake-up-time-sketch-style-hand-drawn-vector-illustration-isolated-white-background_544745-105.jpg?w=2000"
        messageText="Good morning!"
    } else if(time>=evening){
        img="https://res.amazingtalker.com/pictures/images/000/002/105/original/bgdljk.jpeg?1655222777"
        messageText="Good evening"
    } else{
        img="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd6ZWdpamZpa3M3ZHRrczhqczVjNmhwbzBmNnVzaXhyZG41OXBzaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RtMpkxXwnShquj9qMW/giphy.gif"
        messageText="Good afternoon"
    }

    console.log(messageText);
    timeEventJS.innerText=messageText;
    //lolcatImage.scr=image;
    showCurrentTime();
}
    updateClock();

    //getting the clock to increment once a second
    var oneSecond=1000;
    setInterval(updateClock,oneSecond);

    //getting the party time button to work
    var partyButtong=document.getElementById("partyTimeButton");

    var partyEvent = function(){
        if(partytime<0){
            partytime=new Date().getHours()
            partyTimeButton.innerText="Party over!"
        }
    }

//     function changecolor(color){
//         var elm=document.getElementById('buttonn');
//         elm.style.color=color;

//     }
// var anh1=" https://static.vecteezy.com/system/resources/previews/005/176/609/non_2x/good-morning-with-cup-free-vector.jpg"; 
// var anh2="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/Blog/27%20Fun%20Virtual%20Office%20Party%20Ideas/Virtual-Team-Event.jpg?tx=w_responsive:fallback-max-width_1355;fallback-max-width-mobile_720";

// document.getElementById('buttonn').onclick=function(){
//     document.getElementById('anh1').src=anh2;
// }

