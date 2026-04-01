// Open modal by ID
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    }
}

// Close modal by ID
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Optional: Basic form validation (can be expanded later)
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector("#signupModal form");
    const signinForm = document.querySelector("#signinModal form");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const password = signupForm.querySelector("input[type='password']").value;
            const confirmPassword = signupForm.querySelectorAll("input[type='password']")[1].value;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            alert("Account created successfully!");
            closeModal("signupModal");
        });
    }

    if (signinForm) {
        signinForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Signed in successfully!");
            closeModal("signinModal");
        });
    }
});
