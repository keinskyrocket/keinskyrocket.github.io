function myTab(event, element) {
  const tabContent = document.getElementsByClassName("tabContent");
  const tabLinks = document.getElementsByClassName("tabLinks");
  
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(element).style.display = "block";
  event.currentTarget.className += " active";

}

document.getElementById("defaultOpen").click();