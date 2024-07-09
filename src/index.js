////////////////////////////////////////
// hamburger
////////////////////////////////////////
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

////////////////////////////////////////
// sticky nav on scroll
////////////////////////////////////////
const nav = document.querySelector(".nav-primary");

document.addEventListener("scroll", () => {
	if (window.scrollY > window.innerHeight * 0.25) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

////////////////////////////////////////
// countdown
////////////////////////////////////////
const days_span = document.getElementById("days");
const hours_span = document.getElementById("hours");
const minutes_span = document.getElementById("minutes");
const seconds_span = document.getElementById("seconds");

const twoDigitFormat = (time) => {
	if (time < 10) return `0${time}`;
	else return `${time}`;
};

const updateRemainingTime = () => {
	const eventDate = new Date("September 21, 2024 00:00:00").getTime();
	const currentDate = new Date().getTime();

	const difference = eventDate - currentDate;

	const dateInterval = difference > 0 ? difference : 0;

	// time rules
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const daysLeft =
		Math.floor(dateInterval / day) === 0 ? 0 : Math.floor(dateInterval / day);
	const hoursLeft =
		Math.floor((dateInterval % day) / hour) === 0
			? 0
			: Math.floor((dateInterval % day) / hour);
	const minutesLeft =
		Math.floor((dateInterval % hour) / minute) === 0
			? 0
			: Math.floor((dateInterval % hour) / minute);
	const secondsLeft =
		Math.floor((dateInterval % minute) / second) === 0
			? 0
			: Math.floor((dateInterval % minute) / second);

	return {
		seconds: twoDigitFormat(secondsLeft),
		minutes: twoDigitFormat(minutesLeft),
		hours: twoDigitFormat(hoursLeft),
		days: twoDigitFormat(daysLeft),
	};
};

function updateTime() {
	const remainingTime = updateRemainingTime();

	days_span.textContent = remainingTime.days;
	hours_span.textContent = remainingTime.hours;
	minutes_span.textContent = remainingTime.minutes;
	seconds_span.textContent = remainingTime.seconds;
}

updateTime();
setInterval(updateTime, 1000);

////////////////////////////////////////
// image share to social media
////////////////////////////////////////

const shareBtn = document.querySelector(".share");

const removeOverlay = (e) => {
	e.classList.add("hidden");
};

shareBtn.addEventListener("click", () => {
	let modal = document.getElementById(`modal-sfd`);

	if (!modal) {
		modal = document.createElement("dialog");
		modal.classList.add("share-modal");
		modal.id = "modal-sfd";

		modal.innerHTML = `
				<div class="btn-container">
					<button id="copy-sfd">Copy<iconify-icon icon="ion:copy"></iconify-icon></button>
				</div>
			`;

		modal.innerHTML += `
				<form method="dialog">
					 <button>×</button>
				</form>
			`;
		document.body.append(modal);
	}

	modal.showModal();
});

document.addEventListener("click", (e) => {
	if (e.target.id === "copy-sfd") {
		navigator.clipboard.writeText(
			"https://www.softwarefreedomday.org/images/warptheme/ilovesfd.png"
		);

		e.target.innerHTML = 'Copied!<iconify-icon icon="ion:copy">';
	}
});
