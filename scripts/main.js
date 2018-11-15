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
  const attendingSelect = document.querySelector(".js-attending-select");
  const attendeeElements = document.querySelectorAll(".js-for-attendees");
  const nonAttendeeElements = document.querySelectorAll(".js-for-non-attendees");

  attendingSelect.addEventListener("change", function(event) {
    if (event.target.value === "Yes") {
      showElements(attendeeElements);
      hideElements(nonAttendeeElements);
    } else {
      showElements(nonAttendeeElements);
      hideElements(attendeeElements);
    }
  });
});
