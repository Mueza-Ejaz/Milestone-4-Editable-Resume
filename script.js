var _a;
// Listening to Form Submission
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type Assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var profilePictureElement = document.getElementById('profile-picture');
    var profileImgElement = document.getElementById('profile-img');
    // Check if all elements are present
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && profilePictureElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handle profile picture
        var file = profilePictureElement.files ? profilePictureElement.files[0] : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if (profileImgElement) {
                    profileImgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    document.getElementById('profile-picture-preview').style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        }
        else {
            document.getElementById('profile-picture-preview').style.display = 'none';
        }
        // Create Resume Output
        var resumeOutput = "\n            <div style=\"text-align: center;\">\n                <img src=\"".concat((profileImgElement === null || profileImgElement === void 0 ? void 0 : profileImgElement.src) || 'placeholder-image.png', "\" alt=\"Profile Picture\" id=\"profile-img\">\n            </div>\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span id=\"output-name\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"output-email\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span id=\"output-phone\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p id=\"output-education\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p id=\"output-experience\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p id=\"output-skills\">").concat(skills, "</p>\n            <button class=\"edit\">Edit</button>\n            <button class=\"save\">Save</button>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Show both form and resume, allowing editing
            document.getElementById('resumeform').style.display = 'block';
            resumeOutputElement.style.display = 'block';
            // Add real-time update functionality
            enableRealTimeEditing();
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
function enableRealTimeEditing() {
    // Get form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Get corresponding output elements
    var outputName = document.getElementById('output-name');
    var outputEmail = document.getElementById('output-email');
    var outputPhone = document.getElementById('output-phone');
    var outputEducation = document.getElementById('output-education');
    var outputExperience = document.getElementById('output-experience');
    var outputSkills = document.getElementById('output-skills');
    // Add input event listeners to update the resume in real-time
    nameElement.addEventListener('input', function () {
        outputName.textContent = nameElement.value;
    });
    emailElement.addEventListener('input', function () {
        outputEmail.textContent = emailElement.value;
    });
    phoneElement.addEventListener('input', function () {
        outputPhone.textContent = phoneElement.value;
    });
    educationElement.addEventListener('input', function () {
        outputEducation.textContent = educationElement.value;
    });
    experienceElement.addEventListener('input', function () {
        outputExperience.textContent = experienceElement.value;
    });
    skillsElement.addEventListener('input', function () {
        outputSkills.textContent = skillsElement.value;
    });
}
