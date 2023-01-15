const secondhand = document.getElementById("seconds-hand");
const minutehand = document.getElementById("minutes-hand");
const hourhand = document.getElementById("hours-hand");

function gettime(){
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const timeInterval = 6; 
    
    secondhand.style.transform = 'rotate(' + (second * timeInterval)+'deg)';
    minutehand.style.transform = 'rotate(' + ((minute * timeInterval) + second / 10) + 'deg)';
    hourhand.style.transform = 'rotate(' + (hour * 30 + minute / 2) + 'deg)';
}
setInterval(gettime, 1000);