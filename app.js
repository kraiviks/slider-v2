const container = document.querySelector(".container");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");
const slides = document.querySelector(".slider");
const slidesCount = slides.querySelectorAll("div").length;
const gradientBox = document.querySelector(".gradient-box");

let initialSlide = 0;

gradientBox.style.top = `-${(slidesCount - 1) * 100}vh`;

btnUp.addEventListener("click", () => choiseSlide("up"));
btnDown.addEventListener("click", () => choiseSlide("down"));

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowUp") {
		choiseSlide("up");
	} else if (e.key === "ArrowDown") {
		choiseSlide("down");
	}
});

function choiseSlide(direction) {
	switch (direction) {
		case "up":
			initialSlide--;
			if (initialSlide < 0) {
				initialSlide = slidesCount - 1;
			}
			break;
		case "down":
			initialSlide++;
			if (initialSlide === slidesCount) {
				initialSlide = 0;
			}
			break;
		default:
			break;
	}

	const height = container.clientHeight;
	slides.style.transform = `translateY(-${initialSlide * height}px)`;
	gradientBox.style.transform = `translateY(${initialSlide * height}px)`;
}
