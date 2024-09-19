const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Send the form data to the server or do something else
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});
