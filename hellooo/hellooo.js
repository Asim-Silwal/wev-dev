// Sections
const formSection = document.getElementById("formSection");
const cardSection = document.getElementById("cardSection");

// Form Inputs
const nameInput = document.getElementById("stdName");
const roleInput = document.getElementById("stdRole");
const emailInput = document.getElementById("stdEmail");
const phoneInput = document.getElementById("stdPhone");
const photoInput = document.getElementById("stdPhoto");

// Output fields
const outName = document.getElementById("outName");
const outRole = document.getElementById("outRole");
const outEmail = document.getElementById("outEmail");
const outPhone = document.getElementById("outPhone");
const photoBox = document.getElementById("photoBox");

// Button
const createBtn = document.getElementById("createBtn");

// Generate ID Card
createBtn.addEventListener("click", () => {

  // Fill card details
  outName.textContent = nameInput.value || "No Name";
  outRole.textContent = roleInput.value || "Not Provided";
  outEmail.textContent = emailInput.value || "Not Provided";
  outPhone.textContent = phoneInput.value || "Not Provided";

  // Load uploaded image
  const file = photoInput.files[0];
  if (file) {
    const imgURL = URL.createObjectURL(file);
    photoBox.style.backgroundImage = `url(${imgURL})`;
  }

  // Remove form completely
  formSection.remove();

  // Show card
  cardSection.classList.remove("hidden");

  // Remove "Create Another" button if exists
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.remove();
  }
});
