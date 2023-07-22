const nav = document.querySelector(".nav-primary");
const hamburgerContainer = document.querySelector(".hamburger-container");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

let hamburgerClicked = false;

hamburgerContainer.addEventListener("click", () => {
	hamburgerClicked = !hamburgerClicked;

	if (hamburgerClicked) {
		hamburger.classList.add("active");
		navList.classList.add("show");
	} else {
		hamburger.classList.remove("active");
		navList.classList.remove("show");
	}
});
