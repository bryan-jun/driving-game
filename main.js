var car1 = {
  direction: 'east'
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
}
