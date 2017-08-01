$(document).ready(function(){


	$("#minusBreak").click(subtract);



});

function subtract(){
	// take the number value in html and subtract one 
	// if I click the ID #minusBreak then the class .breakTime should go down by one
	var $jqbreakTime = #('.breakTime')
	$jqbreakTime --;
	$('breakTime').html($jqbreakTime);
};