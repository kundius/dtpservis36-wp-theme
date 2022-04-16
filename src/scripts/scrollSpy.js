// import scrollSpy from "@sidsbrmnn/scrollspy";

// const options = {
//   sectionSelector: "[data-scrollspy-section]",
//   targetSelector: "a",
//   offset: 64,
//   activeClass: "active",
// };

// scrollSpy(document.querySelector(".header__menu"), options);
// scrollSpy(document.querySelector(".footer__menu"), options);

let section = document.querySelectorAll("[data-scrollspy-section]"); // get all <section> elements
let menuLinks = document.querySelectorAll(".header__menu a, .footer__menu a"); // get all <a> inside <menu> inside <header> element
let sectionHeight = document.querySelector(".header").offsetHeight; // get the height of the top menu
let sectionStartingPointArray = []; // array to store the top-most pixel points of each <section>
let menuLinksArray = []; // array to store the menu elements
// for every <section> element we store their top-most pixel point into an array
section.forEach((sec) => {
  sectionStartingPointArray.push(sec.offsetTop);
});
// for every menu link element we store them in an array
menuLinks.forEach((menuLink) => {
  menuLinksArray.push(menuLink);
});
// call this function everytime we scroll on the browser window
window.onscroll = () => {
  // amount of pixel we have scrolled downwards from the top-most point of the web page
  let downwardScroll = window.scrollY;
  // for every <section>'s top-most point
  sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
    // check if the current downward scroll is on the middle of each <section>
    // by using its top-most point minus its height divide by half
    if (downwardScroll >= sectionStart - sectionHeight / 2) {
      //if so, we remove all the 'active' classes on all menu links
      menuLinksArray.forEach((menu) => {
        menu.classList.remove("active");
      });
      //then add the 'active' class on the corresponding menu depending on which section the scroll is currently at
      menuLinksArray[sectionIndex].classList.add("active");
    }
  });
};
