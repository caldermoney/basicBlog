document.addEventListener("DOMContentLoaded", function() {
    console.log('DOMContentLoaded event fired');  // Add this line to check if the event is firing
    const signupForm = document.getElementById("signup-form");
  
    signupForm.addEventListener('submit', async function(event) {
      event.preventDefault();
    
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
    
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
    
        const data = await response.json();
    
        if (response.status === 200) {
          // Handle successful signup
          window.location.href = '/login';
        } else {
          // Handle error
          alert('Error signing up');
        }
      } catch (err) {
        console.error('Error during signup:', err);
        alert('Error signing up');
      }
    });
});
  