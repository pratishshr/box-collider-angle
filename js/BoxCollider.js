// MAIN CLASS OF THE APPLICATION

function BoxCollider() {
  var boxes = []; //all the boxes
  var container; //container where the boxes are kept
  var totalBoxes = 6;

  //instances
  var box;
  var boxAnimator;
  var player;

  //move player position
  var movePosX;
  var movePosY;

  //inputs
  var velocity = 0;
  var angleDeg;
  var angleRad;
  var goBtn;
  var clickIntervalId;

  var that = this;

  this.start = function() {
    container = document.getElementsByClassName('container')[0];

    //creating the player
    player = new Player();
    player.createPlayer(container);
   
    boxes.push(player.box);

    //creating all boxes
    for (var i = 0; i < totalBoxes; i++) {
      box = new Box();
      box.addClass('box');
      box.setInitialPos();
      box.appendTo(container);
     
      boxes.push(box);
    }

    that.startBoxCollider();
  }

  this.startBoxCollider = function() {
    boxAnimator = new BoxAnimator(boxes);
    boxAnimator.animate(10);

    goBtn = document.getElementById('go-btn');
   
    goBtn.addEventListener('click', that.onGo); //for manual input go button
    container.addEventListener('mousedown', that.onMouseHold); //while holding mouse button
    container.addEventListener('mouseup', that.onMouseUp);  //while releasing mouse button
    container.addEventListener('mousemove', that.onMouseMove); //while moving mouse
  }

  this.onGo = function(e) {
    angleDeg = parseFloat(document.getElementById('angle').value);
    velocity = parseFloat(document.getElementById('velocity').value);

    angleRad = (angleDeg * Math.PI / 180);
    movePosX = (Math.cos(angleRad) * velocity);
    movePosY = -(Math.sin(angleRad) * velocity);
    
    console.log(velocity);  
    console.log("top", movePosY);
    console.log("left", movePosX);
    
    player.movePlayer(movePosX, movePosY);
  }

  this.onMouseHold = function() {
    velocity = 1;
   
    clickIntervalId = setInterval(function() {
      velocity++;
      document.getElementById('velocity').value = velocity;
      if(velocity >= 10){
        clearInterval(clickIntervalId);
      }
     }, 250)
  }

  this.onMouseUp = function(e) {
    clearInterval(clickIntervalId);
   
    var x = parseInt(e.pageX-container.offsetLeft);
    var y = parseInt(500-e.pageY-container.offsetTop);
 
    angleRad = Math.atan(y / x);
    angleDeg = angleRad * (180 / Math.PI);
   
    movePosX = (Math.cos(angleRad) * velocity);
    movePosY = -(Math.sin(angleRad) * velocity);

    player.movePlayer(movePosX, movePosY);
  }

  this.onMouseMove = function(e){
    var x = parseInt(e.pageX-container.offsetLeft);
    var y = parseInt(500-e.pageY-container.offsetTop);
 
    angleRad = Math.atan(y / x);
    angleDeg = angleRad * (180 / Math.PI);
   
    document.getElementById('angle').value = parseInt(angleDeg);
  }

}

var boxCollider = new BoxCollider();
boxCollider.start();
