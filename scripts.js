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
		}
		$('.breakTime').html(breakTime);
	});

	$("#plusBreak").click(function(){
		if(breakTime < 20){
		breakTime++;
		}
		$(".breakTime").html(breakTime);
	});

	$("#minusSession").click(function(){
		if(sessionTime > 1){
			sessionTime--;
			$(".sessionTime").html(sessionTime);
		}
		if(countingDown === false && $("#title").text() === "Session"){
			$("#clockTime").html(sessionTime + ":00")
		}
	});

	$("#plusSession").click(function(){
		if(sessionTime < 60){
			sessionTime++;
			$(".sessionTime").html(sessionTime);
		}
		if(countingDown === false && $("#title").text() === "Session"){
			$("#clockTime").html(sessionTime + ":00")
		}
	});

	$(".clock").click(function(){
		if(countingDown === false){
			countingDown = true;
		}
		 else {
			countingDown = false;
			}
		countdown();
	});


	function countdown(){
		// check if session time or break time
		if(seconds === 0 && minutes === 0){
			if($("#title").text() === "Session"){
				$("#title").html("Break");
				minutes = breakTime;
			}else{
				$("#title").html("Session");
				minutes = sessionTime;
			}
		} 
		// for countdown use appropriate time

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
