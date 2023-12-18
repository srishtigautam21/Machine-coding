const yearMonth = document.querySelector(".year-month");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const calender = document.querySelector(".calender");
const eventModal = document.querySelector(".eventModal");
const modalBackground = document.querySelector(".modalBackground");
const eventTitleInput = document.querySelector(".eventTitleInput");
const saveBtn = document.querySelector(".saveBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const deleteEventModal = document.querySelector(".deleteEventModal");
const eventText = document.querySelector(".eventText");
const deleteBtn = document.querySelector(".deleteBtn");
const closeBtn = document.querySelector(".closeBtn");

let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

let clicked = 0;

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

  clicked = date;
  let eventOfTheDay = events.find((e) => e.date === clicked);
  if (eventOfTheDay) {
    eventText.textContent = eventOfTheDay.title;
    deleteEventModal.style.display = "block";
  } else {
    eventModal.style.display = "block";
  }

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
      let eventOfTheDay = events.find((e) => e.date === strDate);
      if (eventOfTheDay) {
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.textContent = eventOfTheDay.title;
        calenderDays.appendChild(eventDiv);
      }
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

const closeModal = () => {
  eventModal.style.display = "none";
  deleteEventModal.style.display = "none";
  modalBackground.style.display = "none";
};

const handleSaveBtn = () => {
  if (eventTitleInput.value) {
    events.push({
      title: eventTitleInput.value,
      date: clicked,
    });
    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  }
};

const handleDeleteEvent = () => {
  events = events.filter((e) => e.date !== clicked);
  localStorage.setItem("events", JSON.stringify(events));
  closeModal();
};

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

saveBtn.addEventListener("click", () => handleSaveBtn());
closeBtn.addEventListener("click", () => closeModal());
cancelBtn.addEventListener("click", () => closeModal());
deleteBtn.addEventListener("click", () => handleDeleteEvent());

populateDays();
