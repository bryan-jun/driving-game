var car1 = {
  direction: 'east',
  x: null,
  y: null
};

document.addEventListener('keydown', keyPress, false);

var carPic = document.querySelector('#car');

function keyPress(event) {

  var key = event.key;

  switch (key) {
    case 'ArrowUp':
      car1.direction = 'north';
      carPic.setAttribute('class', 'north');
      break;

    case 'ArrowDown':
      car1.direction = 'south';
      carPic.setAttribute('class', 'south');
      break;

    case 'ArrowLeft':
      car1.direction = 'west';
      carPic.setAttribute('class', 'west');
      break;

    case 'ArrowRight':
      car1.direction = 'east';
      carPic.setAttribute('class', 'east');
      break;

  }

  if (event.code === 'Space') {
    setInterval(update, 16);

  }

}

function update() {
  var position = carPic.getBoundingClientRect();
  car1.x = position.left;
  carPic.style.setProperty('left', car1.x + 10 + 'px');
  car1.x += 1;

}
