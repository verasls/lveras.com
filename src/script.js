"use strict";

const yearEl = document
  .querySelector("header-component")
  .querySelector("header")
  .querySelector(".year");

yearEl.textContent = new Date().getFullYear();
