 var countTime = 25;
 var breakTime = 5;
  //use this to see if we can change times on pause
 var pause = false;
 var seconds = 0;
 var minutes = 25;
  //global interval variable
 var counting;

 $('.timer').html(minutes + ":00");
  
 function countdown(){
    
    
    if(minutes === 0 && seconds === 1){
      //play the sound on both
      audio.play();
      }
   
   // when minutes and seconds get to zero, change the title from 'session' to 'break' and set time to break time
   if(minutes === 0 && seconds === 0){
      if($('.title').text() === 'Session'){
        $('.title').text('Break');
        minutes = breakTime;
        $('.timer').html(minutes + ":0" + seconds);
      }
      
      // if title was break, then change it back to 'session'
      else if($('.title').text() === 'Break'){
        $('.title').text('Session');
        minutes = countTime;
        $('.timer').html(minutes + ":0" + seconds);
      }
   }
   else{
      if(seconds === 0){
        seconds = 60; 
        minutes--;
      }
      seconds--;
      if(seconds < 10){
        $('.timer').html(minutes + ":0" + seconds);
      }
      else{
      $('.timer').html(minutes + ":" + seconds);
      }
   }
  }