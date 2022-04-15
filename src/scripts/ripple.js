class RippleStyleAttributes {
  constructor(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }
}

function initForClassName(className) {
  const duration = 800
  const buttons = document.querySelectorAll(`.${className}`) || [];

  buttons.forEach((button) => {
    button.addEventListener("click", function (ev) {
      let tag = document.createElement("span");
      tag.classList.add(`${className}__ripple`)
      let pos = this.getBoundingClientRect();
      let width = this.offsetWidth;
      let height = this.offsetHeight;
      let posX = ev.pageX - pos.left;
      let posY = ev.pageY - pos.top;
      console.log(ev.pageY, pos.top)
      let rippleStyleAttr = new RippleStyleAttributes(
        width,
        height,
        posX,
        posY
      );
      tag.style.width = rippleStyleAttr.width + "px";
      tag.style.height = rippleStyleAttr.height + "px";
      tag.style.top = rippleStyleAttr.top + "px";
      tag.style.left = rippleStyleAttr.left + "px";
      tag.style.animationDuration = `${duration}ms`;
      this.appendChild(tag);
      setTimeout(() => {
        this.removeChild(tag);
      }, duration)
    });
  });
}

initForClassName("ui-button-primary");
