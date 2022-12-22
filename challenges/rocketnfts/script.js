const radios = document.querySelectorAll('.slides input');
let count = 1;
let width = window.innerWidth;

let interval = setInterval(() => {
  if (width < 1110) {
    nextImage();
  }else {
    document.querySelector('div.first').style.margin = 0;
    
  }
}, 5000);

window.addEventListener('resize', () => {
  width = window.innerWidth;
});

radios.forEach(radio => {
  const id = radio.id.slice(-1)
  radio.addEventListener('click', () => {
    count = id
  })
})

function nextImage() {
  radios[count].checked = true;
  count++;
  if (count == radios.length) {
    count = 0;
  }
}
