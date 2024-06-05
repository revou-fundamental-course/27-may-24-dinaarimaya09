document.addEventListener('DOMContentLoaded', function() {
    const name = prompt("Please enter your name");
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Hi ${name}, Welcome To Website`;

    const form = document.getElementById('message-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        const formDataDisplay = document.getElementById('form-data');
        formDataDisplay.innerHTML = `
            <h3>Form Data Submitted:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
        `;
    });
});
//hi