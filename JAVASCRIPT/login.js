// Get the login form and submit button
const loginForm = document.querySelector('.login-form');
const loginButton = loginForm.querySelector('button[type="submit"]');

// Add event listener to the login button
loginButton.addEventListener('click', (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the username and password inputs
  const usernameInput = loginForm.querySelector('input[name="username"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  // Check if the username and password are valid
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check the credentials against a hard-coded value
  if (username === 'prince' && password === 'popo2020') {
    // Redirect to the user page
    window.location.href = 'user.html';
  } else {
    // Display an error message
    alert('Invalid username or password');
  }
});
