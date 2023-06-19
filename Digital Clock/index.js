const HourEL=document.getElementById("hour");
const MinuteEL=document.getElementById("minutes");
const SecEL=document.getElementById("seconds");
const ampmEL=document.getElementById('ampm');

function updateClock(){
    var h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm= "AM"

    if(h>12){
        h=h-12;
        ampm="PM"
    }

    HourEL.innerText =h;
    MinuteEL.innerText=m;
    SecEL.innerText=s;
    ampmEL.innerText=ampm;
    setTimeout(()=>
    updateClock(),1000)

}
updateClock()

























