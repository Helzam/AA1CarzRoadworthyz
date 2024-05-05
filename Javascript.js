document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submitButton');
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      const mailToLink = `mailto:Jakeheslam@live.com.au?subject=Message from ${name}&body=${message}%0D%0AEmail: ${email}`;
  
      window.location.href = mailToLink; // Open default email client with pre-filled data
    });
  });
  .about {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .about-content {
    flex: 1;
    margin-right: 20px;
  }
  
  .about-image img {
    max-width: 100%;
    height: auto;
  }
  