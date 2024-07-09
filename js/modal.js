const app = document.querySelector(".app");

const createModal = (modalSelector, openButtonsSelector, closeButtonsSelector) => {
	const modal = document.querySelector(modalSelector);
	const openButtons = document.querySelectorAll(openButtonsSelector);
	const closeButtons = document.querySelectorAll(closeButtonsSelector);

	openButtons.forEach((button) => {
		button.addEventListener("click", () => {
			console.log(modal);
			modal.classList.add("modal__overlay--show");
			
			app.style.overflow = "hidden";
			app.style.minHeight = "auto";
			app.style.maxHeight = "100vh";
			document.body.style.minHeight = "auto";
		});
	});

	closeButtons.forEach((button) => {
		button.addEventListener("click", () => {
			modal.classList.remove("modal__overlay--show");

			app.style.overflow = "auto";
			app.style.minHeight = "100dvh";
			app.style.maxHeight = "100%";
			document.body.style.minHeight = "100vmax";
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
createModal("#downloadModal", "#downloadModalOpenButton", ".downloadModalCloseButton");

// Price modal - project.html
createModal("#priceModal", "#priceModalOpenButton", ".priceModalCloseButton");

// Tender modal - partners.html
createModal("#tenderModal", "#tenderModalOpenButton", ".tenderModalCloseButton");

// Resume modal - career.html
createModal("#resumeModal", "#resumeModalOpenButton", ".resumeModalCloseButton")