document.addEventListener("DOMContentLoaded", function() {
  const newPostForm = document.getElementById("new-post-form");

  newPostForm.addEventListener("submit", async function(event) {
      event.preventDefault();

      const title = document.getElementById("new-title").value;
      const content = document.getElementById("new-content").value;

      const response = await fetch('/new-post', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              title: title,
              content: content
          })
      });

      if (response.ok) {
          // Redirect to dashboard if post was created successfully
          window.location.href = '/dashboard';
      } else {
          // Handle errors, you can display a message to the user
          console.error('Failed to create post');
      }
  });
});
