
let logged = JSON.parse(localStorage.getItem("logged"));

if(logged){
    const nameLabel = document.getElementById("userName");
    const loginElement = document.getElementById("loginNavigation");
    const userStorage = JSON.parse(localStorage.getItem("user"));


    loginElement.classList = "hidden_element";

    nameLabel.textContent = userStorage.nombre;
    nameLabel.className = "element_nav links_nav";
}

const cerrarLogin = document.getElementById("userName");

cerrarLogin.addEventListener("click", function(e){
    localStorage.setItem("logged", JSON.stringify(false));
    
    window.location.href = "/html/portafolio.html";
});