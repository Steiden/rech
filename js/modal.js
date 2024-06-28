// Calc modal
const calcModal = document.getElementById("calcModal");
const calcModalCloseButtons = document.querySelectorAll("calcModalCloseButton");
const calcModalOpenButton = document.getElementById("calcModalOpenButton");

calcModalOpenButton.addEventListener("click", () => {
	calcModal.classList.add("modal__overlay--show");
	document.body.style.overflow = "hidden";
});
calcModalCloseButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calcModal.classList.remove("modal__overlay--show");
		document.body.style.overflow = "auto";
	});
});

// Callback modal
const callbackModal = document.getElementById("callbackModal");
const callbackModalCloseButtons = document.querySelectorAll(".callbackModalCloseButton");
const callbackModalOpenButton = document.getElementById("callbackModalOpenButton");

callbackModalOpenButton.addEventListener("click", () => {
	callbackModal.classList.add("modal__overlay--show");
	document.body.style.overflow = "hidden";
});
callbackModalCloseButtons.forEach((button) => {
	button.addEventListener("click", () => {
		callbackModal.classList.remove("modal__overlay--show");
		document.body.style.overflow = "auto";
	});
});

// Callback modal
const questionModal = document.getElementById("questionModal");
const questionModalCloseButtons = document.querySelectorAll(".questionModalCloseButton");
const questionModalOpenButton = document.getElementById("questionModalOpenButton");

questionModalOpenButton.addEventListener("click", () => {
	questionModal.classList.add("modal__overlay--show");
	document.body.style.overflow = "hidden";
});
questionModalCloseButtons.forEach((button) => {
	button.addEventListener("click", () => {
		questionModal.classList.remove("modal__overlay--show");
		document.body.style.overflow = "auto";
	});
});
