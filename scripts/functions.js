//Tab
const myTab = document.querySelector(".tab");
const tabLinks = document.querySelectorAll(".tab-link");
const tabContainers = document.querySelectorAll(".tab-container");

myTab.addEventListener("click", function(evtTab) {
  const tabId = evtTab.target.dataset.tabname;
  if(tabId) {
    tabLinks.forEach(function(link) {
      link.classList.remove("active");
      evtTab.target.classList.add("active");
    });
    tabContainers.forEach(function(content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(tabId);
    element.classList.add("active");
  }
});