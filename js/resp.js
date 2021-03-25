// burger = document.querySelector('.burger')
// navbar = document.querySelector('.navbar')
// a = document.querySelectorAll('.navbar .options')

// burger.addEventListener('click',()=>{
//     for (i = 0; i < a.length; i++) {
//         a[i].classList.toggle('v-class-resp');
//     }
//     navbar.classList.toggle('h-nav-resp');
// })

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("header").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("header").style.marginLeft= "0";
};
function myFunction() {
    var x = document.getElementById("password-field");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction_two() {
    var x = document.getElementById("myDIV");
        x.style.display = "block";
    
}
function myFunction_three() {
    var x = document.getElementById("menu");
        x.style.display = "block";
    
}

