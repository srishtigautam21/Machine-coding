const selectAll = document.querySelectorAll(".content");
const progress = document.querySelectorAll(".progress");
const percentage = document.querySelectorAll(".percntage");
const selectedColumn = document.querySelectorAll(".each-coloumn");

const handlecolumnClick = () => {
  for (let i = 0; i < selectAll.length; i++) {
    progress[i].style.display = "block";
    percentage[i].style.display = "block";
  }
};

const handleSelectedColoumn = (index) => {
  selectedColumn[index].classList.add("active");
  for (let i = 0; i < selectedColumn.length; i++) {
    if (i === index) {
      continue;
    }
    selectedColumn[i].classList.add("notActive");
  }
};

for (let i = 0; i < selectAll.length; i++) {
  selectAll[i].addEventListener("click", () => handlecolumnClick());
}
for (let i = 0; i < selectedColumn.length; i++) {
  selectedColumn[i].addEventListener("click", () => handleSelectedColoumn(i));
}
