document.addEventListener("DOMContentLoaded", function() {
  const logoutButton = document.getElementById("logoutBtn");

  // Check if the logoutButton actually exists before adding event listener
  if (logoutButton) {
    logoutButton.addEventListener("click", async function(event) {
      event.preventDefault();

      const response = await fetch("/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (response.ok) {
        // Handle successful logout
        window.location.href = "/";
      } else {
        // Handle error
        alert("Logout failed");
      }
    });
  }
});
