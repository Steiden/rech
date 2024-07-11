const app = document.querySelector(".app");

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


// Calc modal - home.html
createModal("#calcModal", "#calcModalOpenButton", ".calcModalCloseButton");

// Callback modal - home.html
createModal("#callbackModal", "#callbackModalOpenButton", ".callbackModalCloseButton");

// Question modal - home.html
createModal("#questionModal", "#questionModalOpenButton", ".questionModalCloseButton");

// Thanks - home.html
createModal("#thanksModal", "#openThanksModal", '[data-modal="closeThanksModal"');

// Director modal - about-production.html
createModal("#directorModal", "#directorModalOpenButton", ".directorModalCloseButton");

// Complex modal - about-production.html
createModal("#complexModal", ".complexModalOpenButton", ".complexModalCloseButton");

// Download modal - documentation.html
createModal("#downloadModal", ".downloadModalOpenButton", ".downloadModalCloseButton");

// Price modal - project.html
createModal("#priceModal", "#priceModalOpenButton", ".priceModalCloseButton");

// Tender modal - partners.html
createModal("#tenderModal", "#tenderModalOpenButton", ".tenderModalCloseButton");

// Resume modal - career.html
createModal("#resumeModal", "#resumeModalOpenButton", ".resumeModalCloseButton")