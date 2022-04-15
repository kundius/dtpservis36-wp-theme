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
      console.log(response);

      modal.open("#modal-page");
    });

    // const formData = new FormData(form);
    // formData.append("_wpcf7_recaptcha_response", token);
    request.send(formData);

    // fetch(theme_ajax.url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);

    //     modal.open("#modal-page");
    //   });
  });
});
