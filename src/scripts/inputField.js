const fields = document.querySelectorAll(".ui-input-field") || [];

fields.forEach((field) => {
  const input = field.querySelector("input, textarea");

  input.addEventListener("input", (evt) => {
    const value = input.value;

    if (!value) {
      field.classList.add("ui-input-field_empty");
    } else {
      field.classList.remove("ui-input-field_empty");
    }
  });
});
