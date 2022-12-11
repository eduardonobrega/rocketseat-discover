function openAndClosedMenu() {
  const btnBurguer = document.querySelector('header > button');
  const nav = document.querySelector('nav');
  const img = btnBurguer.firstElementChild;

  nav.classList.toggle('hide-nav');

  const navOpen = !nav.classList.contains('hide-nav');

  if (navOpen) {
    img.src = './assets/menu-buguer-close.svg';
  } else {
    img.src = './assets/menu-buguer-open.svg';
  }
}

window.addEventListener('resize', styleChange);

window.onload = () => {
  const width = window.screen.width;
  const tagCss = document.querySelector('head link[rel="stylesheet"]');

  width >= 640
    ? (tagCss.href = './styles/desktop.css')
    : (tagCss.href = './styles/mobile.css');

  if (width >= 640) {
    document.body.innerHTML = `
    <header>
    <img src="assets/logo-desktop.svg" alt="Logo rockertseat">

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Recompensas</a></li>
        <li><a href="#">GiftCards</a></li>
        <li><a href="#">Lojas</a></li>
      </ul>
    </nav>

    <button class="button">
      Pegar meu café
    </button>
  </header>

  <main>
    <h1>
      Great Coffee<br />
      <span>&lt;Great Code/&gt;</span>
    </h1>

    <img src="assets/rocket-coffee.png" alt="">
  </main>
    
    `;
  } else {
    tagCss.href = './styles/mobile.css';
    document.body.innerHTML = `
    <header>

        <img src="assets/logo-mobile.svg" alt="Logo Rocketseat" />
        <button onclick="openAndClosedMenu()"><img src="assets/menu-buguer-open.svg" /></button>

    </header>

    <nav class="hide-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Recompensas</a></li>
        <li><a href="#">GiftCards</a></li>
        <li><a href="#">Lojas</a></li>
      </ul>
    </nav>

    <main>
      <p>O café que fará seu código decolar para o próximo nível.</p>

      <button class="button">
        Pegar meu café
        <img src="assets/arrow.svg" alt="flecha apontando para a direita" />
      </button>

      <h1>
        Great Coffee<br />
        <span>&lt;Great Code/&gt;</span>
      </h1>


      <img src="./assets/rocket-coffee.png" alt="">
    </main>`;
  }

  styleChange();
};

function styleChange(e) {
  let width = window.screen.width;

  const tagCss = document.querySelector('head link[rel="stylesheet"]');

  if (width < 640 && !tagCss.href.includes('mobile')) {
    tagCss.href = './styles/mobile.css';
    document.body.innerHTML = `
    <header>

        <img src="assets/logo-mobile.svg" alt="Logo Rocketseat" />
        <button onclick="openAndClosedMenu()"><img src="assets/menu-buguer-open.svg" /></button>

    </header>

    <nav class="hide-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Recompensas</a></li>
        <li><a href="#">GiftCards</a></li>
        <li><a href="#">Lojas</a></li>
      </ul>
    </nav>

    <main>
      <p>O café que fará seu código decolar para o próximo nível.</p>

      <button class="button">
        Pegar meu café
        <img src="assets/arrow.svg" alt="flecha apontando para a direita" />
      </button>

      <h1>
        Great Coffee<br />
        <span>&lt;Great Code/&gt;</span>
      </h1>


      <img src="./assets/rocket-coffee.png" alt="">
    </main>`;
  } else if (width >= 640 && !tagCss.href.includes('desktop')) {
    tagCss.href = './styles/desktop.css';
    document.body.innerHTML = `
    <header>
    <img src="assets/logo-desktop.svg" alt="Logo rockertseat">

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Recompensas</a></li>
        <li><a href="#">GiftCards</a></li>
        <li><a href="#">Lojas</a></li>
      </ul>
    </nav>

    <button class="button">
      Pegar meu café
    </button>
  </header>

  <main>
    <h1>
      Great Coffee<br />
      <span>&lt;Great Code/&gt;</span>
    </h1>

    <img src="assets/rocket-coffee.png" alt="">
  </main>
    
    `;
  }
}
