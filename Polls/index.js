const selectAll = document.querySelectorAll(".content");
const progress = document.querySelectorAll(".progress");
const percentage = document.querySelectorAll(".percntage");
const selectedColumn = document.querySelector(".each-coloumn");

const handlecolumnClick = () => {
  for (let i = 0; i < selectAll.length; i++) {
    console.log(selectAll[i]);
    progress[i].style.display = "block";
    percentage[i].style.display = "block";
  }
};

const handleSelectedColoumn = () => {
  selectedColumn.classList.add("active");
  console.log(selectedColumn);
};

for (let i = 0; i < selectAll.length; i++) {
  selectAll[i].addEventListener("click", () => handlecolumnClick());
}
selectedColumn.addEventListener("click", () => handleSelectedColoumn());
