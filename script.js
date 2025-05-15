// Show/hide the back to top button when scrolling
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top when the button is clicked
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Booking form submit action
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh

  // Get form values
  const name = document.getElementById("name").value;
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;

  if (name && pickup && destination && date) {
    alert(
      `Thank you, ${name}!\nYour cab to ${destination} from ${pickup} on ${date} has been booked successfully.`
    );
    form.reset();
  } else {
    alert("Please fill in all the fields.");
  }
});
