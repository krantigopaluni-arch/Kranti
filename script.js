function registerUser() {
    let name = document.getElementById("username").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("user", name);
    alert("Registered successfully!");
}

function openBook() {
    let user = localStorage.getItem("user");

    if (!user) {
        alert("Please register first!");
    } else {
        window.location.href = "book.html";
    }
}

function readBook() {
    document.getElementById("readingSection").style.display = "block";
}