const username = localStorage.getItem('username');
const usernameElement = document.querySelector('.username');
usernameElement.textContent = username;

const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-input');
const chatMessages = document.querySelector('.chat-messages');

chatForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = chatInput.value;
  
  // Send message to chat system using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://lackyalvin.com/chat-system');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      chatMessages.innerHTML += '<div>' + message + '</div>';
      chatInput.value = '';
    } else {
      console.log('Error: ' + xhr.status);
    }
  };
  xhr.send('message=' + encodeURIComponent(message));
});
