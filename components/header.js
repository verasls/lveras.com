"use strict";

const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <header class="header">
    <a href="index.html#hero">
      <img class="logo" src="images/logo.png" alt="Lucas Veras logo" />
    </a>

    <ul class="site-options">
      <li>
        <ion-icon class="options-icon" name="contrast-outline"></ion-icon>
      </li>
      <li>
        <ion-icon class="options-icon" name="globe-outline"></ion-icon>
      </li>
    </ul>

    <nav class="main-nav">
      <ul class="main-nav-list">
        <li><a class="main-nav-link" href="index.html#about">About</a></li>
        <li><a class="main-nav-link" href="index.html#tools">Tools</a></li>
        <li>
          <a class="main-nav-link" href="index.html#projects">Projects</a>
        </li>
        <li><a class="main-nav-link" href="#">Item</a></li>
      </ul>
    </nav>

    <ul class="social-media">
      <li>
        <a class="social-media-link" href="#">
          <ion-icon class="social-media-icon" name="logo-github"></ion-icon>
        </a>
      </li>
      <li>
        <a class="social-media-link" href="#">
          <ion-icon class="social-media-icon" name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li>
        <a class="social-media-link" href="#">
          <ion-icon class="social-media-icon" name="logo-twitter"></ion-icon>
        </a>
      </li>
    </ul>

    <p class="copyright">
      Copyright &copy; <span class="year">0000</span> by Lucas Veras
    </p>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplate.innerHTML;
  }
}

customElements.define("header-component", Header);
