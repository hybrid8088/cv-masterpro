// Select the form and response message element
const form = document.querySelector("#contactForm");
const responseMessage = document.querySelector("#responseMessage");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        responseMessage.style.color = "red";
        responseMessage.textContent = "⚠️ Please fill in all fields before submitting.";
    } else {
        responseMessage.style.color = "green";
        responseMessage.textContent = "✅ Thank you, " + name + "! Your message has been sent.";
        form.reset(); // Clear the form
    }
});
