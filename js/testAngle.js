
container = document.getElementsByClassName('container')[0];
player = new Player();
player.createPlayer(container);
boxes = [];
boxes.push(player.box);

box = new Box();
box.addClass('box');
box.element.style.left = 5 + 'px';
box.element.style.top = 390  + 'px';
box.appendTo(container);
boxes.push(box);
boxAnimator = new BoxAnimator(boxes);
boxAnimator

console.log(player.box.posX);
console.log(player.box.posY);



