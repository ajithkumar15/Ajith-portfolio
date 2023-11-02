document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const textToType = "FrontEnd Developer"; // The text you want to type
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the typing speed (milliseconds per character)
        } else {
            // Typing is complete, reset for an infinite loop
            setTimeout(() => {
                textElement.textContent = "";
                index = 0;
                typeText();
            }, 500); // Adjust the delay before restarting the typing
        }
    }

    typeText(); // Start typing when the page loads


    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the content of the element with the id "date"
    const dateElement = document.getElementById("date");
    dateElement.textContent = `@ ${currentYear} All Rights Reserved | Designed by Ajith Kumar A`;
});
