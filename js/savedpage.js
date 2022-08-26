let loadedItems = sessionStorage.getItem("storedItems");

let loadedDiv = document.createElement("div");

loadedDiv.innerHTML = loadedItems;

$(".savedDestination").append(loadedDiv);

$(".saveforlater").hide();

function dropdownFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}

$("#hello").click(function () {
  alert("General Kenobi!");
});
