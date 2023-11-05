document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", async function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        // Handle successful login
        window.location.href = "/dashboard";
      } else {
        // Handle error
        alert("Incorrect username or password");
      }
    });
  });
  