document.getElementById('action-btn').addEventListener('click', function() {
    if (confirm('Hi guys! Do you want to contact me?')) {
        document.getElementById('contact-form-container').style.display = 'flex';
    }
});

document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('contact-form-container').style.display = 'none';
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent.');
    document.getElementById('contact-form-container').style.display = 'none';
});
