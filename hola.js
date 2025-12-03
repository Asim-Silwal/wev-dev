const inputField = document.getElementById("textInput");

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert(`Enter key is pressed and field has "${inputField.value}" value`);
    }
});
