$(document).ready(function(){

	var breakTime = 5;
	var sessionTime = 25;

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
		}
		$(".sessionTime").html(sessionTime);
	});

	$("#plusSession").click(function(){
		if(sessionTime < 60){
			sessionTime++;
		}
		$(".sessionTime").html(sessionTime)
	});

});
