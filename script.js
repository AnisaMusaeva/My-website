const nav = document.querySelector(".none");
function Nav_open(){
    document.querySelector("header img").setAttribute("style", "display: none;");
    nav.setAttribute("style", "display:block")
}
function Nav_close(){
    nav.setAttribute("style", "display:none");
    document
        .querySelector("header img")
        .setAttribute("style", "display: inline;");
}


document.querySelector("header img").addEventListener("mouseover", function () {
    document
        .querySelector("header img")
        .setAttribute("style", "display: none;");
    nav.setAttribute("style", "display:block");
});
document.querySelector("nav img").addEventListener("mouseover", function (){
    nav.setAttribute("style", "display:none");
    document
        .querySelector("header img")
        .setAttribute("style", "display: inline;");
});