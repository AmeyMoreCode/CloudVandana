// script.js

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const popup = document.getElementById("popup");
  const closePopupBtn = document.getElementById("closePopup");

  submitBtn.addEventListener("click", function () {
    displaySurveyResponse();
  });

  resetBtn.addEventListener("click", function () {
    resetForm();
  });

  closePopupBtn.addEventListener("click", function () {
    closePopup();
  });

  function displaySurveyResponse() {
    // Retrieve form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = [];
    if (document.getElementById("male").checked) gender.push("Male");
    if (document.getElementById("female").checked) gender.push("Female");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Validate the form (you can add more specific validations)
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !country ||
      gender.length === 0 ||
      !profession ||
      !email ||
      !mobile
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Display survey response in the popup
    const response = `
            First Name: ${firstName}<br>
            Last Name: ${lastName}<br>
            Date of Birth: ${dob}<br>
            Country: ${country}<br>
            Gender: ${gender.join(", ")}<br>
            Profession: ${profession}<br>
            Email: ${email}<br>
            Mobile Number: ${mobile}
        `;

    document.getElementById("response").innerHTML = response;
    popup.style.display = "block";
  }

  function resetForm() {
    document.getElementById("surveyForm").reset();
  }

  function closePopup() {
    popup.style.display = "none";
    resetForm();
  }
});
