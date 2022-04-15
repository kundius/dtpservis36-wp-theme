import HystModal from "hystmodal";

const modal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

// const modalAgreement = new HystModal({
//   linkAttributeName: "data-hystmodal",
// });

const modalAgreementTrigger = document.querySelector(
  "[data-hystmodal-agreement]"
);
if (modalAgreementTrigger) {
  modalAgreementTrigger.addEventListener("click", (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", 3);
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
}
// data-hystmodal-agreement
