function init(reviews) {
  const wrapper = document.querySelector(".reviews");
  const buttonMoreWraps = document.querySelectorAll("[data-review-more-wrap]") || [];
  const buttonMoreButtons = document.querySelectorAll("[data-review-more-button]") || [];
  const buttonClose = document.querySelector(".reviews-details__close");
  const buttonLeft = document.querySelector(".reviews-info__nav-left");
  const buttonRight = document.querySelector(".reviews-info__nav-right");
  const name = document.querySelector(".reviews-info__name");
  const description = document.querySelector(".reviews-info__desc");
  const date = document.querySelector(".reviews-info__date");
  const previewExcerpt = document.querySelector(
    ".reviews-preview__content-text"
  );
  const previewImage = document.querySelector(".reviews-preview__figure-image");
  const previewVideo = document.querySelector(
    ".reviews-preview__content-video"
  );
  const previewWrap = document.querySelector(".reviews-preview");
  const detailsWrap = document.querySelector(".reviews-details");
  const detailsText = document.querySelector(".reviews-details__content-text");
  const detailsImage = document.querySelector(".reviews-details__figure-image");
  const detailsVideo = document.querySelector(
    ".reviews-details__content-video"
  );

  let duration = 400;
  let active = 0;
  let animating = false;

  const renderReview = (index) => {
    wrapper.classList.add("reviews_animation-out");
    previewWrap.classList.add("reviews-preview_animation-out");
    detailsWrap.classList.add("reviews-details_animation-out");
    animating = true;
    setTimeout(() => {
      name.innerHTML = reviews[index].name;
      description.innerHTML = reviews[index].description;
      date.innerHTML = reviews[index].date;

      previewExcerpt.innerHTML = reviews[index].excerpt;
      previewVideo.innerHTML = reviews[index].video;
      buttonMoreWraps.forEach((el) => {
        el.style.display = reviews[index].content ? "block" : "none";
      });
      previewVideo.style.display = reviews[index].video ? "block" : "none";
      previewImage.style.backgroundImage = reviews[index].image
        ? `url('${reviews[index].image.url}')`
        : null;

      detailsText.innerHTML = reviews[index].content;
      detailsVideo.innerHTML = reviews[index].video;
      detailsVideo.style.display = reviews[index].video ? "block" : "none";
      detailsImage.style.backgroundImage = reviews[index].image
        ? `url('${reviews[index].image.url}')`
        : null;

      wrapper.classList.remove("reviews_animation-out");
      wrapper.classList.add("reviews_animation-in");

      previewWrap.classList.remove("reviews-preview_animation-out");
      previewWrap.classList.add("reviews-preview_animation-in");

      detailsWrap.classList.remove("reviews-details_animation-out");
      detailsWrap.classList.add("reviews-details_animation-in");

      setTimeout(() => {
        wrapper.classList.remove("reviews_animation-in");
        previewWrap.classList.remove("reviews-preview_animation-in");
        detailsWrap.classList.remove("reviews-details_animation-in");
        animating = false;
      }, duration);
    }, duration);
  };

  const alignDetails = () => {
    const rect = previewWrap.getBoundingClientRect();

    let top = rect.top;
    let left = rect.left;
    let width = rect.width;
    let height = rect.height;

    if (window.matchMedia("(max-width: 959px)").matches) {
      width = window.innerWidth - left * 2;
    }

    detailsWrap.style.top = `${top}px`;
    detailsWrap.style.left = `${left}px`;
    detailsWrap.style.width = `${width}px`;
    detailsWrap.style.minHeight = `${height}px`;
  };

  const showDetails = () => {
    alignDetails();
    detailsWrap.style.display = "block";
    window.addEventListener("scroll", alignDetails);
  };

  const hideDetails = () => {
    detailsWrap.style.display = "none";
    window.removeEventListener("scroll", alignDetails);
  };

  buttonLeft.addEventListener("click", () => {
    if (animating) return;

    active = active === 0 ? reviews.length - 1 : active - 1;

    renderReview(active);
  });

  buttonRight.addEventListener("click", () => {
    if (animating) return;

    active = active === reviews.length - 1 ? 0 : active + 1;

    renderReview(active);
  });

  buttonMoreButtons.forEach((el) => {
    el.addEventListener("click", () => {
      showDetails();
    });
  });

  buttonClose.addEventListener("click", () => {
    hideDetails();
  });
}

if (typeof theme_reviews) {
  init(theme_reviews);
}
