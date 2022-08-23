const arrows = document.querySelectorAll(".arrow");
const movie = document.querySelectorAll(".movie");
const player = document.querySelectorAll(".player");

const showArrow = function(data) {
    console.log("show arrow");
}
const hideArrow = function(data) {
    console.log("hide arrow");
}
console.log("installing player callbacks");
movie.forEach((aMovie,i) => {
    aMovie.on("playing", hideArrow);
    aMovie.on("pause", showArrow);
    aMovie.on("ended", showArrow);
});

arrows.forEach((anArrow, i) => {
    const itemNumber = movie[i].querySelectorAll("img").length;
    let clickCounter = 0;
    anArrow.addEventListener("click", () => {
        console.log("Arrow clicked");
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movie[i].style.transform = `translateX(${
                movie[i].computedStyleMap().get("transform")[0].x.value
                -300}px)`;
        } else {
            movie[i].style.transform = "translate(0)";
            clickCounter = 0;
        }
    });
});

function navigateTo(url) {
    window.location = url;
}