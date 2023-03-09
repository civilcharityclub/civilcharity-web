const donationForm = document.querySelector('#donation-form');
const submitButton = document.querySelector('#submit-button');
const successMessage = document.querySelector('#success-message');
const errorMessage = document.querySelector('#error-message');

donationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const amount = document.querySelector('#amount').value;
  const phone = document.querySelector('#phone').value;
  
  submitButton.disabled = true;
  
  // Send donation data to server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'process-donation.php');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200) {
      successMessage.classList.add('show');
      donationForm.reset();
    } else {
      errorMessage.classList.add('show');
    }
    submitButton.disabled = false;
  };
  xhr.send(`name=${name}&email=${email}&amount=${amount}&phone=${phone}`);
});
