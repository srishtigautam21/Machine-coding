let datePicker = document.querySelector(".date-picker");
let dateToggle = document.querySelector(".months-dates");
const selected_date_element = document.querySelector(
  ".date-picker .selected-date"
);
let leftArrow = document.querySelector(".left-month");
let rightArrow = document.querySelector(".right-month");
let mth = document.querySelector(".month");
let days = document.querySelector(".dates");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let currDate = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

mth.textContent = `${months[month]} ${year}`;
selected_date_element.textContent = formatDate(date);

populateDays();

datePicker.addEventListener("click", handletoggleEvent);
leftArrow.addEventListener("click", handlePrevMonth);
rightArrow.addEventListener("click", handleNextMonth);

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

function handleNextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth.textContent = `${months[month]} ${year}`;
  populateDays();
}

function handlePrevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth.textContent = `${months[month]} ${year}`;
  populateDays();
}

function populateDays() {
  days.innerHTML = "";
  let amount_of_days = 31;
  if (month === 1) {
    amount_of_days = 28;
  }
  for (let i = 0; i < amount_of_days; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("date");
    day_element.textContent = i + 1;
    days.appendChild(day_element);
  }
}

//Helper func
function checkEventPathForClass(path, selector) {
  if (selector.includes(path.classList.value)) {
    return true;
  } else {
    return false;
  }
}

function formatDate(d) {
  let date = d.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  let month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  return `${date} / ${month} / ${year}`;
}
