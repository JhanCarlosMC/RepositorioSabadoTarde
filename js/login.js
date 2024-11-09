let formLogin = document.getElementById('login');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailLogin = document.getElementById("email").value;
    const passwordLogin = document.getElementById("password").value;

    const userStorage = JSON.parse(localStorage.getItem("user"));

    if(emailLogin == userStorage.correo && passwordLogin == userStorage.pass){
        localStorage.setItem("logged", JSON.stringify(true));
        window.location.href = "/html/portafolio.html";

    }else{
        alert("Usuario y contraseña INCORRECTOS");
    }
});