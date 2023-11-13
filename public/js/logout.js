document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.querySelector('#logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (event) => {
      event.preventDefault();
      fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => {
        if (response.ok) {
          document.location.replace('/login');
        } else {
          alert('Logout failed');
        }
      })
      .catch(err => console.error('Logout error:', err));
    });
  }
});
