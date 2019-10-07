function showElements(elements) {
  elements.forEach(function(element) {
    element.classList.remove("hidden");

    element.querySelectorAll("input, select").forEach(function(input) {
      input.disabled = false;
      input.required = true;
    });
  });
}

function hideElements(elements) {
  elements.forEach(function(element) {
    element.classList.add("hidden");
    
    debugger;
    element.querySelectorAll("input, select").forEach(function(input) {
      input.disabled = true;
      input.required = false;
    });
  });
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
