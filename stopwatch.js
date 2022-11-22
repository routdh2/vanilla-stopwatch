window.onload = function() {
  //variables getting used
  var seconds = 0;
  var tens = 0;
  var secondsElement = document.getElementById("seconds");
  var tensElement = document.getElementById("tens");
  var startButton = document.getElementById("start-button");
  var stopButton = document.getElementById("stop-button");
  var resetButton = document.getElementById("reset-button");
  var interval;

  //functions
  startButton.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }

  stopButton.onclick = function() {
    clearInterval(interval);
  }

  resetButton.onclick = function() {
    clearInterval(interval);
    //reset things
    seconds=0;
    tens=0;
    secondsElement.innerHTML = "00";
    tensElement.innerHTML = "00";
  }

  function startTimer() {
    //increase tens count
    tens++;
    if(tens<=9) {
      tensElement.innerHTML="0"+tens;
    }
    if(tens>9) {
      tensElement.innerHTML = tens;
    }
    if(tens>99) {
      //increase seconds count
      seconds++;
      if(seconds<=9) {
        secondsElement.innerHTML = "0"+seconds;
      } 
      if(seconds>9) {
        secondsElement.innerHTML = seconds;
      }
      //and set tens to zero
      tens=0;
      tensElement.innerHTML="00";
    }
  }


}