var car1 = {
  direction: 'east',
  x: null,
  y: null,
  start: false
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
    if (car1.start === false) {
      myInterval = setInterval(update, 16);
      car1.start = true;
    } else if (car1.start === true) {
      clearInterval(myInterval);
      car1.start = false;

    }
  }

}

function update() {

  if (car1.direction === 'east') {
    var position = carPic.getBoundingClientRect();
    car1.x = position.left;
    car1.y = position.top;
    carPic.style.setProperty('left', car1.x + 10 + 'px');
    car1.x += 10;
  } else if (car1.direction === 'west') {
    carPic.style.setProperty('left', car1.x - 10 + 'px');
    car1.x -= 10;
  } else if (car1.direction === 'north') {
    carPic.style.setProperty('top', car1.y - 10 + 'px');
    car1.y -= 10;
  } else if (car1.direction === 'south') {
    carPic.style.setProperty('top', car1.y + 10 + 'px');
    car1.y += 10;
  }

}

var myInterval = setInterval(update, 16);
clearInterval(myInterval);
