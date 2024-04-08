let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".max_lg_view");
let body = document.body;
let first_line = document.querySelector(".first_line")
let second_line = document.querySelector(".second_line")
let third_line = document.querySelector(".third_line")
function cross() {
    second_line.style.display = "none";
    // first_line.classList.add("transform-origin-center-center");
    first_line.style.transform = "rotate(45deg)";
    first_line.style.top = "13px";
    first_line.style.left = "2px";
    first_line.classList.add("position-relative");
    // third_line.classList.add("transform-origin-center-center");
    third_line.style.transform = "rotate(-45deg)";
    third_line.style.top = "-12px";
    third_line.classList.add("position-relative");
}
function remove_cross() {
    second_line.style.display = "block";
    // first_line.classList.add("transform-origin-center-center");
    first_line.style.transform = "rotate(0deg)";
    first_line.classList.remove("position-relative");
    // third_line.classList.add("transform-origin-center-center");
    third_line.style.transform = "rotate(0deg)";
    third_line.classList.remove("position-relative");
}

menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
        cross();
    } else {
        body.style.overflow = "auto";
        remove_cross();
    }
});
