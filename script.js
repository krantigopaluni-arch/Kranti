// Open/Close Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Open/Close Signup Modal
function openSignupModal() {
    document.getElementById("signupModal").style.display = "block";
}

function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    let loginModal = document.getElementById("loginModal");
    let signupModal = document.getElementById("signupModal");
    
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Login Function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    
    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }
    
    if (!isValidEmail(email)) {
        alert("Please enter a valid email");
        return;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }
    
    // Store user data
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", email.split("@")[0]);
    localStorage.setItem("isLoggedIn", "true");
    
    alert("Logged in successfully!");
    closeLoginModal();
    updateNavbar();
}

// Signup Function
function signup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupConfirmPassword").value;
    
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields");
        return;
    }
    
    if (!isValidEmail(email)) {
        alert("Please enter a valid email");
        return;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    
    // Store user data
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    localStorage.setItem("isLoggedIn", "true");
    
    alert("Account created successfully!");
    closeSignupModal();
    updateNavbar();
}

// Logout Function
function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    
    alert("Logged out successfully!");
    updateNavbar();
}

// Update Navbar based on login status
function updateNavbar() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let navbarRight = document.querySelector(".navbar-right");
    
    if (isLoggedIn === "true") {
        let userName = localStorage.getItem("userName");
        navbarRight.innerHTML = `
            <span style=\"color: white; padding: 14px 16px;\">Welcome, ${userName}!</span>
            <button onclick=\"logout()\" style=\"background-color: #e74c3c; color: white; padding: 14px 16px; border: none; cursor: pointer; border-radius: 4px;\">Logout</button>
        `;
    } else {
        navbarRight.innerHTML = `
            <button onclick=\"openLoginModal()\" class=\"btn-login\">Sign In</button>
            <button onclick=\"openSignupModal()\" class=\"btn-signup\">Sign Up</button>
        `;
    }
}

// Open Book
function openBook() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (isLoggedIn !== "true") {
        alert("Please sign in or sign up to access the book!");
        openLoginModal();
    } else {
        alert("Opening book for " + localStorage.getItem("userName"));
        window.location.href = "book.html";
    }
}

// Initialize page
window.onload = function() {
    updateNavbar();
}
