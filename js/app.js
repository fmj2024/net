var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    let id=check.checked;
    if (id==true) {
        location.href= "https://fmj2024.github.io/Network/";
    } else{
        location.href = "https://fmj2024.github.io/NetworEsp/";
    }
}