//Player Class

function Player() {
  this.box; //one instance of Box

  var that = this;

  this.createPlayer = function(container) {
    that.box = new Box();
    that.box.addClass('box player');
    that.box.appendTo(container);
    that.box.posX = 5;
    that.box.posY = 465;
    that.box.movePosX = 0;
    that.box.movePosY = 0;
    that.box.element.style.top = that.box.posY + 'px';
    that.box.element.style.left = that.box.posX + 'px';
  }

  this.movePlayer = function(movePosX, movePosY) {
    that.box.movePosX = movePosX;
    that.box.movePosY = movePosY;
  }

  
}
