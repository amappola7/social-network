import { googleSignIn } from '../lib/firebaseServices.js';

export const welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.className = 'sectionWelcome';
  sectionWelcome.innerHTML = `
    <figure class="welcome__figure">
        <!--<img class="welcome__illustration" src="https://imagizer.imageshack.com/img922/3091/JEOR6i.png" alt="illustration">-->
        <img class="welcome__illustration" src="https://imagizer.imageshack.com/img923/4224/CKf4zk.png" alt="illustration">
    </figure>

    <div class="welcome__container">
        <div class="welcome__logo-brand">
            <img class="welcome__logo" src="https://imagizer.imageshack.com/img924/341/OKd1u8.png
            " alt="logo">
            <h1 class="welcome__title">SysTEM</h1>
            <p class="welcome__message">Where we all add up</p>
        </div>
        <a href='#login' class="button welcome__button">Log in</a>
        <a href='#register' class="button welcome__button">Create account</a>
        <p class="welcome__text">or</p>
        <button class="button welcome__button-google">
        <img class="welcome__logo-google" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png
        " alt="logo-google">Sign in with Google</button>
    </div>
    `;

  const googleButton = sectionWelcome.querySelector('.welcome__button-google');
  googleButton.addEventListener('click', () => {
    googleSignIn()
      .then(() => {
        window.location.hash = '#wall';
      })
      .catch(() => {
      });
  });

  return sectionWelcome;
};
