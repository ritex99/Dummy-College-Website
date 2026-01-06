// LOGIN
const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };

        fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(result => {
            if (result === "success") {
                localStorage.setItem("adminLoggedIn", "true");
                window.location.href = "/admin-dashboard.html";
            } else {
                document.getElementById("errorMsg").innerText =
                    "Invalid username or password";
            }
        });
    });
}

// LOGOUT
function logout() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "/admin-login.html";
}
