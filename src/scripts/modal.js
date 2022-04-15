import HystModal from "hystmodal";

const modal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

const modalPages = document.querySelectorAll("[data-hystmodal-page]") || [];
modalPages.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", button.dataset.hystmodalPage);
    data.append("action", "get_page");

    fetch(theme_ajax.url, {
      methode: "post",
      body: data,
    })
      .then((request) => request.json())
      .then((json) => {
        console.log(json);

        modal.open("#agreement");
      });
  });
});
