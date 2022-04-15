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
  modalAgreementTrigger.addEventListener("click", async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("id", 3);
    data.append("action", "get_page");

    const request = await fetch(theme_ajax.url, {
      methode: "get",
      body: data,
    });
    const json = await request.json();

    console.log(json);

    modal.open("#agreement");
  });
}
// data-hystmodal-agreement
