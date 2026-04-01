// Function to open the profile dropdown
function openProfileDropdown() {
    document.getElementById('profileDropdown').style.display = 'block';
}

// Function to close the profile dropdown
function closeProfileDropdown() {
    document.getElementById('profileDropdown').style.display = 'none';
}

// Function to toggle the profile dropdown
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown.style.display === 'block') {
        closeProfileDropdown();
    } else {
        openProfileDropdown();
    }
}

// Function to logout
function logout() {
    // Logic for logging out the user
    console.log('User logged out');
    // Redirect to login page
    window.location.href = '/login';
}

// Update navbar to show user profile information if logged in
function updateNavbar(user) {
    const navbar = document.getElementById('navbar');
    if (user) {
        // Assume user object has name property
        navbar.innerHTML += `<div id='profileDropdown' style='display:none;'>\n    <p>Hello, ${user.name}</p>\n    <button onclick='logout()'>Logout</button>\n</div>`;
    }
}
