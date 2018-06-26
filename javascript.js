//if we click on the start-reset button.
	//if already playing-reload
	//if not playing
		//show the countdown box
			//reduce time by 1 sec
				//if time left>0 - continue
				//if time left=o - GAME-OVER!
		//show score

		// display question and answer
//if we click on the answer button
	//ans is wrong
		//display incorrect for 1 sec
	//ans is correct
		//change questions and answers
		//increase score by 1
		//display correct for 1 sec
//on clicking the start reset button		
var playing=false;
var score;
var timeremaining;
var action;
var correctanswer;


document.getElementById("startreset").onclick=function(){

	if (playing == true){
		//reload page
		document.getElementById("scorevalue").innerHTML = 0;
		document.getElementById("startreset").innerHTML = "Start Game";
		hide("timeremaining");
		hide("gameover");
		playing=false;
		hide("message")
		stopcountdown();

	}
	else{
		playing=true;

		document.getElementById("startreset").innerHTML = "Reset Game";
		score =0;
		document.getElementById("scorevalue").innerHTML = score;
//score will be defined later
		show("timeremaining");
//show function wil be defined later
		hide("gameover");
		hide("message");
		timeremaining = 60;
		document.getElementById("timeremainingvalue").innerHTML = timeremaining;
		startcountdown();
		
//ask question
		questionans();
	}
}

function questionans(){
	var a = 1 + Math.round(9*Math.random());
	var b = 1 + Math.round(9*Math.random());
	document.getElementById("question").innerHTML = a + "x" + b;
	correctanswer = a*b;
	var c = 1 + Math.round(3*Math.random());
	document.getElementById("box"+ c).innerHTML = correctanswer;

	var answers =["correctanswer"]

	for(i=1; i<5; i++){
		if (i != c){
			var wronganswer;
			do{
				wronganswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()))
			}while(answers.indexOf(wronganswer) > -1)
			document.getElementById("box" + i).innerHTML = wronganswer;
			answers.push(wronganswer);
		}
	}
}

for (i=1; i<5; i++){
	document.getElementById("box" + i).onclick=function () {
		if (playing ==true){
			if (this.innerHTML== correctanswer){
				score +=1;
				questionans();
				document.getElementById("scorevalue").innerHTML =score;
				show("correct");
				hide("wrong");
				setTimeout(function(){hide("correct")}, 1000);
			}
			 else{
				hide("correct");
				show("wrong");
				setTimeout(function(){hide("wrong")}, 1000)
			}
		}
	}
}

function show(id){
	document.getElementById(id).style.display = "block";
}

function hide(id){
	document.getElementById(id).style.display = "none";
}

function startcountdown(){
	action = setInterval(function () {
		timeremaining -=1;
		document.getElementById("timeremainingvalue").innerHTML = timeremaining;
			if(timeremaining == 0){
				show("gameover");
				stopcountdown();
				document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>YOUR SCORE IS:" + score +".</p>";
				hide("timeremaining");
				hide("wrong");
				hide("correct");
				playing ==false;
				document.getElementById("startreset").innerHTML ="Start Game";
			}if(timeremaining < 11){
				show("message");
				document.getElementById("message").innerHTML= "Hurry!";
			}
	} , 1000);
}

function stopcountdown() {
	clearInterval(action);
}






