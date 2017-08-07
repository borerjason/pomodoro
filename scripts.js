$(document).ready(function(){

	var breakTime = 5;
	var sessionTime = 25;
	var sessionTimeMilli = 25 * 60000;
	var countingDown = false;
	var seconds = 0;
	var minutes = 25;

	$("#minusBreak").click(function(){
		if(breakTime > 1){
			breakTime--;
			$('.breakTime').html(breakTime);
		}
		if(countingDown === false && $("#title").text() === "Break"){
			$("#clockTime").html(breakTime + ":00");
		}
	});

	$("#plusBreak").click(function(){
		if(breakTime < 20){
			breakTime++;
			$(".breakTime").html(breakTime);
		}
		if(countingDown === false && $("#title").text() === "Break"){
			$("#clockTime").html(breakTime + ":00");
		}
	});

	$("#minusSession").click(function(){
		if(sessionTime > 1){
			sessionTime--;
			$(".sessionTime").html(sessionTime);
		}
		if(countingDown === false && $("#title").text() === "Session"){
			$("#clockTime").html(sessionTime + ":00");
		}
	});

	$("#plusSession").click(function(){
		if(sessionTime < 60){
			sessionTime++;
			$(".sessionTime").html(sessionTime);
		}
		if(countingDown === false && $("#title").text() === "Session"){
			$("#clockTime").html(sessionTime + ":00");
		}
	});

	$("#start").click(function(){
		if(countingDown === false){
			countingDown = true;
			countdown();
		}
	});

	$("#stop").click(function(){
		countingDown = false;
	});

	$("#reset").click(function(){
		countingDown = false;
		if($("#title").text() === "Session"){
			minutes = sessionTime; 
			seconds = 0;
			$("#clockTime").html(sessionTime + ":00")
		} else{
			minutes = breakTime;
			seconds = 0;
		}
	});


	function countdown(){
		if(seconds === 0 && minutes === 0){
			if($("#title").text() === "Session"){
				$("#title").html("Break");
				minutes = breakTime;
			}else{
				$("#title").html("Session");
				minutes = sessionTime;
			}
		} 
		if(countingDown === true){
			if(seconds === 0){
				minutes--;
				seconds = 59;	
			}else{
			seconds--;
			}
			if(seconds < 10){
				$("#clockTime").html(minutes + ":0" + seconds)
			}else{
				$("#clockTime").html(minutes + ":" + seconds)
			}
			setTimeout(countdown,1000);
		}
	}		

});
