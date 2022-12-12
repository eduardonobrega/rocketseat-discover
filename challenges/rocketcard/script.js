const button = document.querySelector('button');
const bgCard = document.querySelector('.wrapper-card');
const input = document.querySelector('input');
const userImg = document.querySelector('.card > img');
const h1 = document.querySelector('h1');
const spans = document.querySelectorAll('ul > li > span');

button.addEventListener('click', () => {
  const color = randomHexColor();

  bgCard.style.backgroundColor = color;
  button.style.backgroundColor = color;
  userImg.style.borderColor = color;
});

input.addEventListener('change', getUserData);

async function getUserData() {
  try {
    const url = `https://api.github.com/users/${input.value}`;
    const user = await fetch(url).then((res) => res.json())

    const {
      login,
      followers,
      following,
      public_repos,
      company,
      location,
      avatar_url,
    } = user;

    h1.textContent = login;
    userImg.src = avatar_url;

    spans[0].textContent = `${followers} Seguidores`;
    spans[1].textContent = `${following} Seguindo`;
    spans[2].textContent = `${public_repos} Repositórios`;
    spans[3].textContent = company ? `${company}` : 'Não tem';
    spans[4].textContent = `${location}`;
  } catch (error) {
    console.log(error)
  }
}

function randomHexColor() {
  return (
    '#' +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
  );
}
