const createModal = (modalSelector, openButtonsSelector, closeButtonsSelector) => {
	const modal = document.querySelector(modalSelector);
	const openButtons = document.querySelectorAll(openButtonsSelector);
	const closeButtons = document.querySelectorAll(closeButtonsSelector);

	openButtons.forEach((button) => {
		button.addEventListener("click", () => {
			modal.classList.add("modal__overlay--show");
			document.body.style.overflow = "hidden";
		});
	});

	closeButtons.forEach((button) => {
		button.addEventListener("click", () => {
			modal.classList.remove("modal__overlay--show");
			document.body.style.overflow = "auto";
		});
	});
};


// Calc modal
createModal("#calcModal", "#calcModalOpenButton", ".calcModalCloseButton");

// Callback modal
createModal("#callbackModal", "#callbackModalOpenButton", ".callbackModalCloseButton");

// Question modal
createModal("#questionModal", "#questionModalOpenButton", ".questionModalCloseButton");

// Thanks
createModal("#thanksModal", "#openThanksModal", '[data-modal="closeThanksModal"');