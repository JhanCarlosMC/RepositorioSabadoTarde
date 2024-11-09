let formRegistro = document.getElementById("registroForm");

console.log(formRegistro);


formRegistro.addEventListener("submit", function (e){
    e.preventDefault();

    const nameForm = document.getElementById("name").value;
    const emailForm = document.getElementById("email").value;
    const passwordForm = document.getElementById("password").value;

    const newUser = {
        nombre: nameForm,
        correo: emailForm,
        pass: passwordForm
    }

    localStorage.setItem("user", JSON.stringify(newUser));

    window.location.href = "/login.html";
});