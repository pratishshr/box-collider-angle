  // Individual Box Class

  function Box() {
    this.element = document.createElement("div"); // div of the box;

    this.posX; //X or Left position
    this.posY; //Y or Top position

    this.velocity;
    this.movePosX = 0; //move certain position in X direction
    this.movePosY = 0; //move certain position in Y direction

    var that = this;

    this.addClass = function(className) {
      that.element.className = className;
    }

    this.setInitialPos = function() {
      this.posX = Math.floor((Math.random() * 850) + 1);
      this.posY = Math.floor((Math.random() * 450) + 1);

      that.element.style.left = that.posX + 'px';
      that.element.style.top = that.posY + 'px';
    }

    this.appendTo = function(parentElement) {
      parentElement.appendChild(that.element);
    }

  }
