function validateForm() {
	var username = document.forms["registration"]["username"].value;
    var email = document.forms["registration"]["email"].value;
	var password = document.forms["registration"]["password"].value;
	var confirmPassword = document.forms["registration"]["confirmPassword"].value;

	if (username == "" || email == "" || password == "" || confirmPassword == "") {
		alert("All fields are required.");
		return false;
	}

	if (!validateEmail(email)) {
		alert("Invalid email address.");
		return false;
	}

	if (password != confirmPassword) {
		alert("Passwords do not match.");
		return false;
	}

	if (!validatePassword(password)) {
		alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.");
		return false;
	}

	return true;
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validatePassword(password) {
	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
	return re.test(password);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    // 处理注册信息...

    // 跳转到主页
    window.location.href = 'index.html';
});