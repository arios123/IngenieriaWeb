const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const form = document.getElementById("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!email.value.includes("@")){
        alert("Usa un email valido")
    }else{
        window.location.href = "home.html"
    }
});
