let datePicker = document.querySelector(".date-picker");
let dateToggle = document.querySelector(".months-dates");
let selected_date_element = document.querySelector(".selected-date");
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

let selectedDate = date;
let selectedDay = currDate;
let selectedMonth = month;
let selectedYear = year;

mth.textContent = `${months[month]} ${year}`;
selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

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
      "date",
      "dates",
      "date selected",
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
  if ([3, 5, 8, 10].includes(month)) {
    amount_of_days = 30;
  }
  for (let i = 0; i < amount_of_days; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("date");
    day_element.textContent = i + 1;

    if (
      selectedDay === i + 1 &&
      selectedMonth === month &&
      selectedYear === year
    ) {
      day_element.classList.add("selected");
    }
    day_element.addEventListener("click", () => {
      selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
      selectedDay = i + 1;
      selectedMonth = month;
      selectedYear = year;
      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;
      populateDays();
    });
    days.appendChild(day_element);
  }
}

//Helper func
function checkEventPathForClass(path, selector) {
  console.log(path, path.classList.value);
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
