const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const word = document.querySelector('.unique');
word.style.backgroundColor = 'white';

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
      word.style.color = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      word.style.color = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
      word.style.color = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
      word.style.color = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
      word.style.color = e.target.id;
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
      word.style.color = e.target.id;
    }
  });
});
