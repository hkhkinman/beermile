function showElements(elements) {
  elements.forEach(function(element) {
    element.classList.remove("hidden");
    element.disabled = false;
  })
}

function hideElements(elements) {
  elements.forEach(function(element) {
    element.classList.add("hidden");
    element.disabled = true;
  })
}

document.addEventListener("DOMContentLoaded", function() {
  const roleSelect = document.querySelector(".js-role-select");
  const soloElements = document.querySelectorAll(".js-for-solo");
  const teamElements = document.querySelectorAll(".js-for-team");

  roleSelect.addEventListener("change", function(event) {
    if (event.target.value === "team") {
      showElements(teamElements);
      hideElements(soloElements);
    } else {
      showElements(soloElements);
      hideElements(teamElements);
    }
  });
});
