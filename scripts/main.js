function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }

  // Nav toggle
  const myToggle = document.querySelector(".toggle");
  const myMenu = document.querySelector(".menu");

  myToggle.addEventListener("click", function () {
    myMenu.classList.toggle("show-all");
  });

  // Accordion
  const btnAcrdn = document.querySelectorAll(".acrdn-btn");
  btnAcrdn.forEach(function(item) {
    item.addEventListener("click", function(evtAcrdn) {
      const myTarget = evtAcrdn.currentTarget.parentElement.parentElement;
      myTarget.classList.toggle("show-acrdn");
    });
  });

  // Modal
  const btnModal = document.getElementById("btnModal");
  btnModal.addEventListener("click", function() {
    const myModal = document.querySelector(".modal");
    myModal.classList.add("show-mdl");
  });

  const btnModalClose = document.querySelectorAll(".btnModalClose");
  btnModalClose.forEach(function (btnClose) {
    btnClose.addEventListener("click", function() {
      const myModal = document.querySelector(".modal");
      myModal.classList.remove("show-mdl");
    });
  });
}