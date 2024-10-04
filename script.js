document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    const invitedBy = document.getElementById('invitedBy').value;
    const names = document.getElementById('names').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // Simple form validation
    if (!terms) {
        alert('You must agree to the terms & conditions');
        return;
    }

    // Log form data (you can replace this with a form submission or API call)
    console.log({
        invitedBy,
        names,
        email,
        phone,
        username,
        password,
        terms
    });

    alert('Form submitted successfully!');
});
