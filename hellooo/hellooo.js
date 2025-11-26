document.addEventListener("DOMContentLoaded", () => {
    
    const formBox = document.getElementById("inputBox");
    const cardBox = document.getElementById("idCard");

    const nameField = document.getElementById("stdName");
    const idField = document.getElementById("stdId");
    const deptField = document.getElementById("stdDept");
    const photoField = document.getElementById("stdPhoto");

    const outName = document.getElementById("outName");
    const outId = document.getElementById("outId");
    const outDept = document.getElementById("outDept");
    const photoPreview = document.getElementById("photoPreview");

    let imgURL = "";

    // Preview photo immediately
    photoField.addEventListener("change", (event) => {
        const fileSelected = event.target.files[0];
        if (fileSelected) {
            imgURL = URL.createObjectURL(fileSelected);
            photoPreview.src = imgURL;
        }
    });

    // Generate ID card
    document.getElementById("createBtn").addEventListener("click", () => {
        
        if (!nameField.value || !idField.value || !deptField.value || !imgURL) {
            alert("All fields are required!");
            return;
        }

        outName.textContent = nameField.value;
        outId.textContent = idField.value;
        outDept.textContent = deptField.value;

        formBox.classList.add("hidden");
        cardBox.classList.remove("hidden");
    });

    // Reset to create new
    document.getElementById("backBtn").addEventListener("click", () => {
        formBox.classList.remove("hidden");
        cardBox.classList.add("hidden");

        nameField.value = "";
        idField.value = "";
        deptField.value = "";
        photoField.value = "";
        imgURL = "";
        photoPreview.src = "";
    });

});
