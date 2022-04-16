// import scrollSpy from "@sidsbrmnn/scrollspy";

// const options = {
//   sectionSelector: "[data-scrollspy-section]",
//   targetSelector: "a",
//   offset: window.innerHeight / 2,
//   activeClass: "active",
// };

// scrollSpy(document.querySelector(".header__menu"), options);
// scrollSpy(document.querySelector(".footer__menu"), options);

const links =
  document.querySelectorAll(".header__menu a, .footer__menu a") || [];
const sections = document.querySelectorAll("[data-scrollspy-section]");

let prepared = {};
let i = 0;

Array.prototype.forEach.call(sections, function (e) {
  prepared[e.id] = e.offsetTop;
});

const onScroll = () => {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in prepared) {
    if (prepared[i] <= scrollPosition + window.innerHeight / 3) {
      links.forEach((link) => {
        link.classList.remove("active");

        if (link.hash === `#${i}`) {
          link.classList.add("active");
        }
      });
    }
  }
};

window.addEventListener("scroll", onScroll);

// let section = document.querySelectorAll("[data-scrollspy-section]"); // get all <section> elements
// let menuLinks = document.querySelectorAll(".header__menu a, .footer__menu a"); // get all <a> inside <menu> inside <header> element
// let sectionHeight = document.querySelector(".header").offsetHeight; // get the height of the top menu
// let sectionStartingPointArray = []; // array to store the top-most pixel points of each <section>
// let menuLinksArray = []; // array to store the menu elements

// section.forEach((sec) => {
//   sectionStartingPointArray.push(sec.offsetTop);
// });

// menuLinks.forEach((menuLink) => {
//   menuLinksArray.push(menuLink);
// });

// const onScroll = () => {
//   let downwardScroll = window.scrollY;
//   sectionStartingPointArray.forEach((sectionStart, sectionIndex) => {
//     // check if the current downward scroll is on the middle of each <section>
//     // by using its top-most point minus its height divide by half
//     if (downwardScroll >= sectionStart - sectionHeight / 2) {
//       //if so, we remove all the 'active' classes on all menu links
//       menuLinksArray.forEach((menu) => {
//         menu.classList.remove("active");
//       });
//       //then add the 'active' class on the corresponding menu depending on which section the scroll is currently at
//       menuLinksArray[sectionIndex].classList.add("active");
//     }
//   });
// }

// window.addEventListener('scroll', onScroll)