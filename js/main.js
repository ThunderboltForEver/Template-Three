let getSection = document.querySelector(".skills");
let getProgress = document.querySelectorAll(".progress span");
window.onscroll = function () {
    if ( window.scrollY >= getSection.offsetTop-80) {
        getProgress.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}