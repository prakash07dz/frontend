document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const role = document.getElementById('role').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !password || !confirmPassword || !role) {
        formMessage.textContent = "Please fill out all required fields.";
        formMessage.style.color = "#dc3545"; // Bootstrap danger color
        return;
    }

    if (password !== confirmPassword) {
        formMessage.textContent = "Passwords do not match!";
        formMessage.style.color = "#dc3545"; // Bootstrap danger color
        return;
    }

    // Redirect based on selected role
    if (role === 'farmer') {
        window.location.href = 'farmer-dashboard.html';
    } else if (role === 'buyer') {
        window.location.href = 'buyer-dashboard.html';
    }
});
