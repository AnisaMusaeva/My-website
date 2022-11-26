
document.querySelector("header img").addEventListener("touchend", function () {
    document
        .querySelector("header img")
        .setAttribute("style", "display: none;");
    nav.setAttribute("style", "display:block");
});
document.querySelector("nav img").addEventListener("touchend", function () {
    nav.setAttribute("style", "display:none");
    document
        .querySelector("header img")
        .setAttribute("style", "display: inline;");
});