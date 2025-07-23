document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal');

  // Validation helper
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;

    // Clear previous errors
    form.querySelectorAll('.error-message').forEach(el => (el.textContent = ''));

    const nameInput = form.name;
    const emailInput = form.email;
    const messageInput = form.message;

    if (!nameInput.value.trim()) {
      form.querySelector('#name + .error-message').textContent = 'Name is required';
      valid = false;
    }

    if (!emailInput.value.trim()) {
      form.querySelector('#email + .error-message').textContent = 'Email is required';
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      form.querySelector('#email + .error-message').textContent = 'Email is invalid';
      valid = false;
    }

    if (!messageInput.value.trim()) {
      form.querySelector('#message + .error-message').textContent = 'Message is required';
      valid = false;
    }

    if (!valid) return;

    // If valid show modal
    modal.classList.remove('hidden');

    // Optionally clear form
    form.reset();
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal on clicking outside modal-content
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
