import HystModal from "hystmodal";

const modal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

const modalPages = document.querySelectorAll("[data-hystmodal-page]") || [];
modalPages.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", button.dataset.hystmodalPage);
    formData.append("action", "get_page");

    const request = new XMLHttpRequest();
    request.open("POST", theme_ajax.url, true);
    request.addEventListener("readystatechange", function () {
      if (this.readyState != 4) return;

      const response = JSON.parse(request.response);

      if (response.success) {
        document.getElementById("modal-page-title").innerHTML =
          response.data.title;
        document.getElementById("modal-page-content").innerHTML =
          response.data.content;
        modal.open("#modal-page");
      }
    });

    request.send(formData);
  });
});
