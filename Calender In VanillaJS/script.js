const yearMonth = document.querySelector(".year-month");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const calender = document.querySelector(".calender");
const eventModal = document.querySelector(".eventModal");
const modalBackground = document.querySelector(".modalBackground");

const events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const clicked = 0;

let nav = 0;
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dt = new Date();
let date = dt.getDate();
let month = dt.getMonth();
let year = dt.getFullYear();

const openModal = (date) => {
  console.log(date);
  eventModal.style.display = "block";
  modalBackground.style.display = "block";
};

function populateDays() {
  yearMonth.textContent = `${months[month]} ${year}`;

  let daysInMonth = new Date(year, month + 1, 0).getDate();
  let firstDayOfMonth = new Date(year, month, 1);
  //   console.log(daysInMonth, "firstday", firstDayOfMonth);
  let dateStr = firstDayOfMonth.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let paddingDays = weekdays.indexOf(dateStr.split(", ")[0]);

  console.log(paddingDays);
  calender.innerHTML = "";

  const daysInPrevMonth = new Date(year, month, 0).getDate();
  for (let i = 1; i < daysInMonth + paddingDays; i++) {
    let calenderDays = document.createElement("div");
    calenderDays.classList.add("day");

    const strDate = `${i - paddingDays + 1} / ${months[month]} / ${year}`;

    if (i >= paddingDays) {
      calenderDays.textContent = i + 1 - paddingDays;
      calenderDays.addEventListener("click", () => {
        openModal(strDate);
      });
    } else {
      calenderDays.textContent = daysInPrevMonth - (paddingDays - 1 - i);
      calenderDays.classList.add("padding");
    }
    calender.appendChild(calenderDays);
  }
}

previousBtn.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  populateDays();
});
nextBtn.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }

  populateDays();
});

populateDays();
