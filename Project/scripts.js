const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(email == 'periyakandiyammal@gmail.com'){
        alert("send your message successfully!")
    }
    else{
        alert("please enter valid mail ")
    } 
    // Send the form data to the server or do something else
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});
