import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-basic.css";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import IMask from "imask";

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

// Site script
try {
	// Header (Catalog)
	const header = document.getElementById("header");
	const headerMenu = document.getElementById("headerMenu");

	const catalogButton = document.getElementById("catalogButton");
	const closeCatalogButton = document.getElementById("closeCatalogButton");

	catalogButton.addEventListener("click", () => {
		catalogButton.style.display = "none";
		closeCatalogButton.style.display = "flex";
		header.classList.add("header--all");
		headerMenu.style.display = "flex";
		document.body.style.overflow = "hidden";
	});

	closeCatalogButton.addEventListener("click", () => {
		catalogButton.style.display = "flex";
		closeCatalogButton.style.display = "none";
		header.classList.remove("header--all");
		headerMenu.style.display = "none";
		document.body.style.overflow = "auto";
	});

	const desktopCatalogButton = document.getElementById("desktopCatalogButton");
	const catalog = document.getElementById("catalog");
	let desktopCatalogButtonIsCliked = false;

	desktopCatalogButton.addEventListener("mouseenter", () => {
		catalog.classList.add("catalog--visible");
		desktopCatalogButtonIsCliked = true;
	});

	desktopCatalogButton.addEventListener("mouseleave", () => {
		catalog.classList.remove("catalog--visible");
		desktopCatalogButtonIsCliked = false;
	});

	// Map
	const markers = document.querySelectorAll(".map__marker");
	markers.forEach((marker) => {
		marker.addEventListener("click", (e) => {
			if (marker.classList.contains("map__marker--active")) {
				marker.classList.remove("map__marker--active");
				marker.querySelector(".marker__button").style.zIndex = 50;
			} else {
				markers.forEach((marker) => {
					marker.classList.remove("map__marker--active");
					marker.querySelector(".marker__button").style.zIndex = 50;
				});

				marker.classList.add("map__marker--active");
				marker.querySelector(".marker__button").style.zIndex = 55;
			}
		});
	});

	// Actions
	const actions = document.getElementById("actions");
	const closeActionsButton = document.getElementById("closeActions");
	let iscloseActionsButtonClicked = false;
	closeActionsButton.addEventListener("click", () => {
		if (!iscloseActionsButtonClicked) {
			actions.classList.add("actions--show");
			iscloseActionsButtonClicked = true;
		} else {
			actions.classList.remove("actions--show");
			iscloseActionsButtonClicked = false;
		}
	});
	window.addEventListener("scroll", () => {
		const currTop = window.scrollY;
		if (currTop > 500) {
			actions.classList.add("actions--visible");
		}
	});
} catch (e) {
	console.log(e);
}

// Color calendar
try {
	const createCalendar = (inputSelector, dateSelector) => {
		const complexDateInput = document.querySelector(inputSelector);
		if (!document.querySelector(dateSelector) || !complexDateInput) return;
		const calendar = new Calendar({
			id: dateSelector,
			calendarSize: "small",
			theme: "basic",
			weekdayType: "short",
			primaryColor: "#0c71ae",
		});

		calendar.dateChanged = (date) => {
			complexDateInput.value = new Date(date).toLocaleDateString();
		};
	};

	createCalendar("#complexDateInput", "#complexDate");
} catch (e) {
	console.log(e);
}

// Fancybox
try {
	const createGallery = (name) => {
		Fancybox.bind(`[data-fancybox="${name}"`, {
			hideScrollbar: false,

			Toolbar: {
				absolute: false,
				display: {
					left: [],
					middle: [],
					right: ["close"],
				},
			},

			Thumbs: {
				type: "classic",
			},

			Carousel: {
				transition: "slide",

				Navigation: {
					prevTpl: `
						<i class="d_icon-quotation-left-red slider__arrow-icon"
							><span class="path1"></span><span class="path2"></span
							><span class="path3"></span
						></i>
				`,
					nextTpl: `
						<i class="d_icon-quotation-right-red slider__arrow-icon"
							><span class="path1"></span><span class="path2"></span
							><span class="path3"></span
						></i>
				`,
				},
			},

			tpl: {
				closeButton: `
				<button class="f-button is-close-btn close-button" data-fancybox-close title="Закрыть" id="projectSwiperPrev">
					<i class="d_icon d_icon-close close-button__icon"></i>
				</button>
			`,
			},
		});
	};

	createGallery("aboutGallery");

	createGallery("productsGallery");

	createGallery("projectsGallery1");

	createGallery("projectsGallery2");

	createGallery("complexGallery1");
	createGallery("complexGallery2");
	createGallery("complexGallery3");
	createGallery("complexGallery4");

	createGallery("docsGallery");
	createGallery("docsGallery2");

	createGallery("productionGallery");
} catch (e) {
	console.log(e);
}

// Fix
try {
	// Установка ширины поля ввода под текст placeholder
	const fixInputWidthList = document.querySelectorAll("[data-fix-input-width]");
	fixInputWidthList.forEach((input) => {
		input.setAttribute("size", input.placeholder.length);
	});
} catch (e) {
	console.log(e);
}

// Input mask
try {
	const createMask = (selector, mask = "+{7} (000) 000-00-00") => {
		const inputs = document.querySelectorAll(selector);

		if (!inputs.length) return;

		inputs.forEach((input) => {
			new IMask(input, {
				mask: mask,
			});
		});
	};

	createMask("[type=tel]");
	createMask("#callbackModalTime", "00:00-00:00");
} catch (e) {
	console.log(e);
}

// Modal
try {
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
	createModal("#calcModal", ".calcModalOpenButton", ".calcModalCloseButton");

	// Callback modal - home.html
	createModal("#callbackModal", ".callbackModalOpenButton", ".callbackModalCloseButton");

	// Question modal - home.html
	createModal("#questionModal", ".questionModalOpenButton", ".questionModalCloseButton");

	// Thanks - home.html
	createModal("#thanksModal", ".openThanksModal", '[data-modal="closeThanksModal"');

	// Director modal - about-production.html
	createModal("#directorModal", ".directorModalOpenButton", ".directorModalCloseButton");

	// Complex modal - about-production.html
	createModal("#complexModal", ".complexModalOpenButton", ".complexModalCloseButton");

	// Download modal - documentation.html
	createModal("#downloadModal", ".downloadModalOpenButton", ".downloadModalCloseButton");

	// Price modal - project.html
	createModal("#priceModal", ".priceModalOpenButton", ".priceModalCloseButton");

	// Tender modal - partners.html
	createModal("#tenderModal", ".tenderModalOpenButton", ".tenderModalCloseButton");

	// Resume modal - career.html
	createModal("#resumeModal", ".resumeModalOpenButton", ".resumeModalCloseButton");
} catch (e) {
	console.log(e);
}

// Search input
try {
	const allSearchInput = document.querySelectorAll(".search-input");

	allSearchInput.forEach((input) => {
		const searchContent = input.querySelector(".search-input__content");
		const searchInput = input.querySelector(".search-input__input");

		searchContent.addEventListener("click", () => {
			input.classList.add("search-input--active");
			searchInput.focus();
		});

		searchInput.addEventListener("blur", () => {
			if (!searchInput.value) {
				input.classList.remove("search-input--active");
			}
		});
	});
} catch (e) {
	console.log(e);
}

// Select
try {
	const allSelect = document.querySelectorAll(".select");

	allSelect.forEach((select) => {
		const selectButton = select.querySelector(".select__content");
		const selectList = select.querySelector(".select__list");
		const selectItems = selectList.querySelectorAll(".select__item");
		let isClicked = false;

		selectButton.addEventListener("click", () => {
			if (!isClicked) {
				select.classList.add("select--active");
				isClicked = true;
			} else {
				select.classList.remove("select--active");
				isClicked = false;
			}
		});

		selectItems.forEach((item) => {
			item.addEventListener("click", () => {
				const selectInput = select.querySelector(".select__text");
				selectInput.textContent = item.textContent.trim();
				selectInput.value = item.textContent.trim();
				select.classList.remove("select--active");
				isClicked = false;
			});
		});

		window.addEventListener("click", (e) => {
			if (!select.contains(e.target)) {
				select.classList.remove("select--active");
				isClicked = false;
			}
		});
	});
} catch (e) {
	console.log(e);
}

// Swiper
try {
	const removeSlidesActiveStyle = (slides) => {
		slides.forEach((slide) => {
			slide.classList.remove("swiper-slide--active");
		});
	};

	const syncSwipers = (swiper1, swiper2, swiperNumber) => {
		if (swiperNumber === 1) {
			swiper2.activeIndex = swiper1.activeIndex;
			swiper2.slideTo(swiper1.activeIndex);
		}
		if (swiperNumber === 2) {
			swiper1.activeIndex = swiper2.clickedIndex;
			swiper1.slideTo(swiper2.clickedIndex);
		}

		removeSlidesActiveStyle(swiper2.slides);
		swiper2.slides[swiper1.activeIndex]?.classList.add("swiper-slide--active");
	};

	const createSwiper = (swiperSelector) => {
		const sliders = document.querySelectorAll(swiperSelector);

		sliders.forEach((slider) => {
			if (!slider) return;

			const gap = slider.getAttribute("data-swiper-gap") | 18;
			const slidesPerView = slider.getAttribute("data-swiper-slides-per-view")
				? slider.getAttribute("data-swiper-slides-per-view")
				: "auto";

			const swiperPagination = slider.querySelector(".swiper-pagination");
			const swiperScrollbar = slider.querySelector(".swiper-scrollbar");
			const swiperButtonPrev = slider.parentElement.querySelector(".swiper-arrow-prev");
			const swiperButtonNext = slider.parentElement.querySelector(".swiper-arrow-next");

			const swiper = new Swiper(slider, {
				slidesPerView: slidesPerView,
				spaceBetween: gap,
				pagination: {
					el: swiperPagination,
				},
				scrollbar: {
					el: swiperScrollbar,
				},
			});

			if (swiperButtonPrev) {
				swiperButtonPrev.addEventListener("click", () => {
					swiper.slidePrev();
				});
			}

			if (swiperButtonNext) {
				swiperButtonNext.addEventListener("click", () => {
					swiper.slideNext();
				});
			}
		});
	};

	window.addEventListener("load", (e) => {
		const slidesPerView = window.innerWidth <= 480 ? 3 : 4;

		const createDoubleSwiper = (sliderSelector) => {
			const sliders = document.querySelectorAll(sliderSelector);

			sliders.forEach((slider1) => {
				const slider2 = slider1.parentElement.nextElementSibling;

				if (!slider1 || !slider2) return;

				const swiper1 = new Swiper(slider1, {
					autoplay: true,
					spaceBetween: 20,
				});
				const swiper2 = new Swiper(slider2, {
					slidesPerView: slidesPerView,
					slideToClickedSlide: true,
					spaceBetween: 20,
				});

				swiper2.slides[swiper2.activeIndex]?.classList.add("swiper-slide--active");

				const prevButton = slider1.parentElement.querySelector(".swiper-arrow-prev");
				const nextButton = slider1.parentElement.querySelector(".swiper-arrow-next");

				swiper1.on("slideChange", () => syncSwipers(swiper1, swiper2, 1));
				swiper2.on("click", () => syncSwipers(swiper1, swiper2, 2));

				if (nextButton && prevButton) {
					nextButton.addEventListener("click", () => {
						swiper1.slideNext();
					});
					prevButton.addEventListener("click", () => {
						swiper1.slidePrev();
					});
				}
			});
		};

		createDoubleSwiper(".double-swiper");
	});

	createSwiper(".swiper");
} catch (e) {
	console.log(e);
}

// Tabs
try {
	const createTabs = (tabsSelector, contentSelectors) => {
		const tabsContainer = document.querySelector(tabsSelector);

		if (!tabsContainer) return;

		const tabItems = tabsContainer.querySelectorAll(".tab-item");
		const tabContentItems = contentSelectors.reduce((arr, selector) => {
			arr.push(document.querySelector(selector));
			return arr;
		}, []);

		tabItems.forEach((tab) => {
			tab.classList.remove("tab-item--active");
		});
		tabContentItems.forEach((content) => {
			content.classList.add("hidden");
		});

		tabItems[0].classList.add("tab-item--active");
		tabContentItems[0].classList.remove("hidden");

		tabItems.forEach((tab, index) => {
			tab.addEventListener("click", () => {
				if (!tabContentItems[index]?.classList.contains("hidden")) {
					tab.classList.remove("tab-item--active");
					tabContentItems[index]?.classList.add("hidden");
					return;
				}

				tabItems.forEach((tab) => {
					tab.classList.remove("tab-item--active");
				});
				tabContentItems.forEach((content) => {
					content.classList.add("hidden");
				});

				tab.classList.add("tab-item--active");
				tabContentItems[index]?.classList.remove("hidden");
			});
		});
	};

	createTabs(".cardTabs", ["#cardTabContent1", "#cardTabContent2", "#cardTabContent3"]);
	createTabs(".cardTabs2", ["#cardTabContent1", "#cardTabContent2", "#cardTabContent3"]);
} catch (e) {
	console.log(e);
}

// Ymap
try {
	const mapMarker = /*html*/ `<img src="/assets/img/mark.svg" class="footer__mark" />`;

	ymaps.ready(() => {
		const map = new ymaps.Map("ymap", {
			center: [58.099775, 38.741185],
			zoom: 15,
		});

		map.behaviors.disable("scrollZoom");

		const marker1 = new ymaps.Placemark(
			[58.099775, 38.741185],
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "/assets/img/mark.svg",
				iconImageSize: [35, 55],
				iconImageOffset: [-3, -42],
			}
		);
		const marker2 = new ymaps.Placemark(
			[58.096765, 38.73717],
			{},
			{
				iconLayout: "default#image",
				iconImageHref: "/assets/img/mark.svg",
				iconImageSize: [35, 55],
				iconImageOffset: [-3, -42],
			}
		);

		map.geoObjects.add(marker1).add(marker2);
	});
} catch (e) {
	console.log(e);
}
