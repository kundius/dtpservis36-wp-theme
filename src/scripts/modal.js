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
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        modal.open("#modal-page");
      });
  });
});
