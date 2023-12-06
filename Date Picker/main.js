let datePicker = document.querySelector(".date-picker");
let dateToggle = document.querySelector(".date-picker .months-dates");
const selected_date_element = document.querySelector(
  ".date-picker .selected-date"
);

datePicker.addEventListener("click", handletoggleEvent);

function handletoggleEvent(e) {
  if (
    !checkEventPathForClass(e.target, [
      "date-wrapper",
      "month",
      "left-month",
      "right-month",
    ])
  ) {
    dateToggle.classList.toggle("active");
  }
}

//Helper func
function checkEventPathForClass(path, selector) {
  if (selector.includes(path.classList.value)) {
    console.log("in true");
    return true;
  } else {
    return false;
  }
}
