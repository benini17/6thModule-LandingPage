let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputFullName.value !== '' && inputEmail !== '') {
    let fullName = document.getElementById('inputFullName').value;
    let email = document.getElementById('inputEmail').value;
    let data = {
      fullName,
      email,
    };

    let convertData = JSON.stringify(data);

    localStorage.setItem('newUser', convertData);

    let element = document.getElementById('form');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    clearInterval(x);

    let div = document.createElement('div');
    div.className = 'loader';
    form.appendChild(div);

    setTimeout(() => {
      div.remove();

      let congrats = document.createElement('img');
      congrats.src = './assets/congrats.gif';
      form.appendChild(congrats);

      let registered = document.createElement('h3');
      registered.className = 'registered';
      registered.style.color = 'white';
      registered.style.fontSize = '25px';
      registered.style.fontFamily = 'cursive';
      registered.innerHTML = 'Cadastro Realizado. Parabéns!';
      form.appendChild(registered);
    }, 2000);
  } else {
    alert('Favor colocar seu nome e e-mail');
  }
});

let countDownDate = new Date('Aug 30, 2021 18:00:00').getTime();
let x = setInterval(() => {
  let now = new Date().getTime();
  let timeGap = countDownDate - now;

  let days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

  document.getElementById('day').innerHTML = days;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minutes;
  document.getElementById('second').innerHTML = seconds;

  if (timeGap < 0) {
    clearInterval(x);
    let expired = document.getElementById('countDownContainer');
    expired.style.backgroundColor = 'red';
    expired.style.fontSize = '40px';
    expired.style.width = '400px';
    expired.style.height = '100px';
    expired.style.alignItems = 'center';
    expired.style.justifyContent = 'center';
    expired.innerHTML = 'EXPIRED';
  }
}, 1000);
