let btnBurger = document.getElementById('btn-burger');
let aside = document.querySelector('aside');

let logo = aside.querySelector('#logo');
let txtLinks = aside.querySelectorAll('li > a');
let user = aside.querySelector('#user');
console.log(user);

btnBurger.addEventListener('click', () => {
  
  logo.classList.toggle('closed');
  user.classList.toggle('closed');

  txtLinks.forEach((item) => item.classList.toggle('closed'));
  if(logo.classList.contains('closed')) {
    userArea.style.justifyContent = 'center';
    aside.style.animation = 'menu .5s forwards'
  }else {
    aside.style.animation = 'menuShow .5s forwards '
    aside.style.width = '25rem';
    userArea.style.justifyContent = 'space-between';

  }
});
