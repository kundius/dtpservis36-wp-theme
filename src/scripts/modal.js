import HystModal from "hystmodal";

const modal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

// const modalAgreement = new HystModal({
//   linkAttributeName: "data-hystmodal",
// });

const modalAgreementTrigger = document.querySelector('[data-hystmodal-agreement]')
if (modalAgreementTrigger) {
  modalAgreementTrigger.addEventListener('click', (e) => {
    e.preventDefault()
    modal.open('#agreement')
    console.log(modal)
    // return
  })
}
// data-hystmodal-agreement
