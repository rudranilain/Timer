alarm = document.getElementById("audio");
function calculate(){
    endday = document.getElementById("enddate").value;
    endtime = document.getElementById("endtime").value;
    end = new Date(endday + " " + endtime);
    console.log(end);
    interval = setInterval( ()  => cal(end), 1000);
}

function cal(end){
        start = new Date();
        if(end > start){
            timeleft = (end - start)/1000;
            console.log(timeleft);
            day = Math.floor(timeleft/(24*3600));
            hours = Math.floor((timeleft/(3600))%24);
            minutes = Math.floor((timeleft/(60))%60);
            seconds = Math.floor(timeleft%60)
            document.getElementById("day").innerHTML =day;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            if(day == 0 && hours == 0 && minutes == 0 && seconds < 6){
                document.getElementById("div").style.display = "inline-block";
                document.getElementById("div").style.backgroundImage ='url("pic.gif")';
            }
            if(day == 0 && hours == 0 && minutes == 0 && seconds == 0){
                document.getElementById("div").style.display="none";
                alarm.play();
            }
        }
        else{
            document.getElementById("day").innerHTML = 0;
            document.getElementById("hours").innerHTML = 0;
            document.getElementById("minutes").innerHTML = 0;
            document.getElementById("seconds").innerHTML = 0;
        }
    }



function reset(){
    clearInterval(interval);
    document.getElementById("day").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
    alarm.pause()
}

function stop(){
    clearInterval(interval);
    alarm.pause()
}