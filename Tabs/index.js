const tabs = document.querySelectorAll("[data-tab-target]");
const content = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    // console.log(target);
    content.forEach((c) => c.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    target.classList.add("active");
  });
});
