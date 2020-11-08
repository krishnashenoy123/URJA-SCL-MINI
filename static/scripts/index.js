const counter = document.querySelector('.counter');
const btn = document.querySelector('.buttons');
const secondsInput = document.getElementById('seconds');

var seconds;
var minuts;
var remseconds;
var toCount;

function subm(){
    display("submit", "start");
    minuts = Number(secondsInput.value);
    seconds = minuts*60;
    secondsInput.style.display = "none";
    counting();
}

function rese(stat){
    location.reload();
}

function display(first, second){
	document.getElementById(first).style.display = "none";
	document.getElementById(second).style.display = "block";
}

function check(stat){
	toCount = stat.value;
  console.log(stat);
  
	if(stat.id == "start"){
		display("start", "pause",);
	}
	else if(stat.id == "pause"){
		display("pause", "continue");
	}
	else{
		display('continue', "pause");
	}
}

function count(){
  console.log(toCount);
	if(seconds> 0){
       if(toCount == 1){
            seconds--;
            remseconds = seconds % 60;
            minuts = Math.floor(seconds / 60);

            if(remseconds < 10){
       	        remseconds = "0" + remseconds;
            }

            if(minuts < 10){
       	        minuts = "0" + minuts;
            }

            counter.innerHTML = minuts + " : " + remseconds;
       }
	}
	else{
		counter.innerHTML = "Done!";
		btn.style.opacity = '10';
	}
}

function counting(){
	remseconds = seconds % 60;
minuts = Math.floor(seconds / 60);

if(remseconds < 10){
    remseconds = "0" + remseconds;
}

if(minuts < 10){
    minuts = "0" + minuts;
}

counter.innerHTML = minuts + " : " + remseconds;
   setInterval(count, 1000);
}