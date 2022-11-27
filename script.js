
document.querySelector("header img").addEventListener("click", function () {
    document
        .querySelector("header img")
        .setAttribute("style", "display: none;");
    document.querySelector(".none").setAttribute("style", "display:block");
});
document.querySelector("nav img").addEventListener("click", function () {
    document.querySelector(".none").setAttribute("style", "display:none");
    document
        .querySelector("header img")
        .setAttribute("style", "display: inline;");
});