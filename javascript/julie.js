document.getElementById("tilmeldknap").addEventListener("click", function() {
    document.querySelector(".tilmeldpopup").style.display = "flex";
  })

  document.getElementById("tilmeldpopup-kryds").addEventListener("click", function() {
    document.querySelector(".tilmeldpopup").style.display = "none";
  })
