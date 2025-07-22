document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been received.");
        form.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  