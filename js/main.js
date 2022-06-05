let btn = document.querySelector(".upButton");
window.onscroll = function() {
    if (window.scrollY >= 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
btn.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};