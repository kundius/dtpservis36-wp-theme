import { throttle } from './throttle'

const links =
  document.querySelectorAll(".header__menu a, .footer__menu a") || [];
const sections = document.querySelectorAll("[data-scrollspy-section]");
const header = document.querySelector(".header");

let prepared = {};
let i = 0;

Array.prototype.forEach.call(sections, function (e) {
  prepared[`#${e.id}`] = e.offsetTop;
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const offset =
      prepared[link.hash] + window.pageYOffset - header.clientHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});

const onScroll = () => {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in prepared) {
    if (prepared[i] <= scrollPosition + window.innerHeight / 3) {
      links.forEach((link) => {
        link.classList.remove("active");

        if (link.hash === i) {
          link.classList.add("active");
        }
      });
    }
  }
};

window.addEventListener("scroll", throttle(onScroll, 100));
