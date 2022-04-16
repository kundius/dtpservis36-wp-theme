import scrollSpy from "@sidsbrmnn/scrollspy";

const options = {
  sectionSelector: "[data-scrollspy-section]",
  targetSelector: "a",
  offset: 64,
};

scrollSpy(document.querySelector(".header__menu"), options);
scrollSpy(document.querySelector(".footer__menu"), options);
