const yearMonth = document.querySelector(".year-month");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const calender = document.querySelector(".calender");
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
// console.log(
//   dt.toLocaleDateString("en-IN"),
//   dt.toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   })
// );
// yearMonth.textContent = `${dt.toLocaleDateString("en-IN", {
//   month: "long",
// })} ${year}`;

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
  // for (let i = 0; i < paddindDays - 1; i++) {

  // let calenderPaddingDays = document.createElement("div");
  // calenderPaddingDays.classList.add("padding");

  // calender.appendChild(calenderPaddingDays);
  // }
  for (let i = 0; i < daysInMonth + paddingDays; i++) {
    let calenderDays = document.createElement("div");
    calenderDays.classList.add("day");
    if (i >= paddingDays) {
      calenderDays.textContent = i + 1 - paddingDays;
    } else {
      calenderDays.textContent = daysInMonth - (paddingDays - 1 - i);
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
