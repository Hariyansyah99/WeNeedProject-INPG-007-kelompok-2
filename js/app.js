const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z\d]{5,10}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,12})$/),
}

const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});



function store(event) {
    event.preventDefault();
    var inputUsername = document.getElementById("username");
    localStorage.setItem("username", inputUsername.value);

    var inputEmail = document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);

    var inputPassword = document.getElementById("password");
    localStorage.setItem("password", inputPassword.value);

    if (inputUsername.value, inputEmail.value, inputPassword.value === '') {
        alert('data tidak kosong')
    } else {
        alert('berhasil')
        window.open(
            "home.html", "_self"
        )
    }
}

function check(event) {
    event.preventDefault();
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    var userEmail = document.getElementById('userEmail');
    var userPassword = document.getElementById('userPassword');

    if (userEmail.value == storedName && userPassword.value == storedPw) {
        alert('Anda Berhasil login!');
        window.open(
            "home.html", "_self"
        )
    } else {
        alert('Error on login');
    }
}