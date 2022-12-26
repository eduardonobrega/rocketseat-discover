const radios = document.querySelectorAll('.slides input');
let count = 1;
let width = window.innerWidth;
const password = 123;


// essa função 

let interval = setInterval(() => {
  if (width < 1110) {
    nextImage();
  }
}, 4000);

window.addEventListener('resize', () => {
  width = window.innerWidth;
});

function nextImage() {
  radios[count].checked = true;
  count++;
  if (count == radios.length) {
    count = 0;
  }
}
