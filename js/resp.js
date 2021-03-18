burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
a = document.querySelectorAll('.navbar .options')

burger.addEventListener('click',()=>{
    for (i = 0; i < a.length; i++) {
        a[i].classList.toggle('v-class-resp');
    }
    navbar.classList.toggle('h-nav-resp');
})

function myFunction() {
    var x = document.getElementById("password-field");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}