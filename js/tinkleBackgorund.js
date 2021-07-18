let sky = document.querySelector('.sky');

addStars(15);
addMoons(10);
addParallelogram(15);

function addParallelogram(number) {
  for (var i = 0; i < number; i++) {
    const top = Math.floor(Math.random() * 250) + 1;
    const left = Math.floor(Math.random() * 95) + 1;

    let div = document.createElement('div');
    div.style.left = `${left}%`;
    div.style.top = `${top}px`;
    div.className = 'parallelogram';

    sky.appendChild(div);
  }
}

function addStars(number) {
  for (var i = 0; i < number; i++) {
    const top = Math.floor(Math.random() * 250) + 1;
    const left = Math.floor(Math.random() * 95) + 1;

    let div = document.createElement('div');
    div.style.left = `${left}%`;
    div.style.top = `${top}px`;
    div.className = 'star';

    sky.appendChild(div);
  }
}

function addMoons(number) {
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      min = 10;
      max = 60;
    } else {
      min = 170;
      max = 250;
    }
    const left = Math.floor(Math.random() * (max - min + 1)) + min;
    const top = Math.floor(Math.random() * (max - min + 1)) + min;

    // const top = Math.floor(Math.random() * 250) + 1;
    // const left = Math.floor(Math.random() * 250) + 1;

    let div = document.createElement('div');
    div.style.left = `${left}%`;
    div.style.top = `${top}px`;
    div.className = 'moon';

    sky.appendChild(div);
  }
}
