function sendMail() {
    var name = document.getElementById("contact-name").value;
    var email = document.getElementById("contact-email").value;
    var subject = document.getElementById("contact-subject").value;
    var message = document.getElementById("contact-message").value;

    var link = "mailto:mail@josefbuettgen.com" + "?subject=" + escape(subject) + "&body=" + escape(message);

    window.location.href = link;

    resetContactForm();
}

function resetContactForm() {
    document.getElementById("contact-name").value = "Name";
    document.getElementById("contact-email").value = "Email";
    document.getElementById("contact-subject").value = "Subject";
    document.getElementById("contact-message").value = "Message...";
}