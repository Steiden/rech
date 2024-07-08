import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

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

const createSwiper = (swiperSelector, gap, slidesPerView) => {
	const sliders = document.querySelectorAll(swiperSelector);

	sliders.forEach((slider) => {
		if(!slider) return

		const swiperPagination = document.querySelector(".swiper-pagination");

		new Swiper(slider, {
			slidesPerView: slidesPerView,
			spaceBetween: gap,
			pagination: {
				el: swiperPagination,
			},
		});
	});
};

window.addEventListener("load", (e) => {
	const slidesPerView = window.innerWidth <= 480 ? 3 : 4;

	const createDoubleSwiper = (swiper1, swiper2, prev, next) => {
		const sliderEl1 = document.querySelector(swiper1);
		const sliderEL2 = document.querySelector(swiper2);

		if(!sliderEl1 || !sliderEL2) return

		const slider1 = new Swiper(sliderEl1, {
			autoplay: true,
			spaceBetween: 20,
		});
		const slider2 = new Swiper(sliderEL2, {
			slidesPerView: slidesPerView,
			slideToClickedSlide: true,
			spaceBetween: 20,
		});

		slider2.slides[slider2.activeIndex]?.classList.add("swiper-slide--active");

		const nextButton = document.querySelector(next);
		const prevButton = document.querySelector(prev);

		slider1.on("slideChange", () => syncSwipers(slider1, slider2, 1));
		slider2.on("click", () => syncSwipers(slider1, slider2, 2));

		if (nextButton && prevButton) {
			nextButton.addEventListener("click", () => {
				slider1.slideNext();
			});
			prevButton.addEventListener("click", () => {
				slider1.slidePrev();
			});
		}
	};

	// Product section swiper
	createDoubleSwiper(
		".productSwiper",
		".productSwiper2",
		"#productSwiperPrev",
		"#productSwiperNext"
	);

	// About section swiper
	const aboutSwiperPrevButton = document.getElementById("aboutSwiperPrev");
	const aboutSwiperNextButton = document.getElementById("aboutSwiperNext");
	const aboutSwiper = new Swiper(".aboutSwiper", {
		autoplay: true,
		spaceBetween: 20,
	});
	if (aboutSwiperPrevButton && aboutSwiperNextButton) {
		aboutSwiperNextButton.addEventListener("click", () => {
			aboutSwiper.slideNext();
		});
		aboutSwiperPrevButton.addEventListener("click", () => {
			aboutSwiper.slidePrev();
		});
	}

	// Project1 section swiper
	createDoubleSwiper(
		".projectSwiper11",
		".projectSwiper12",
		"#projectSwiperPrev",
		"#projectSwiperNext"
	);

	// Project2 section swiper
	createDoubleSwiper(
		".projectSwiper21",
		".projectSwiper22",
		"#project2SwiperPrev",
		"#project2SwiperNext"
	);

	// Complex swiper 1
	createDoubleSwiper(
		".complexSwiper11",
		".complexSwiper12",
		"#complexSwiper1Prev",
		"#complexSwiper1Next"
	);

	// Complex swiper 2
	createDoubleSwiper(
		".complexSwiper21",
		".complexSwiper22",
		"#complexSwiper2Prev",
		"#complexSwiper2Next"
	);

	// Complex swiper 3
	createDoubleSwiper(
		".complexSwiper31",
		".complexSwiper32",
		"#complexSwiper3Prev",
		"#complexSwiper3Next"
	);

	// Complex swiper 4
	createDoubleSwiper(
		".complexSwiper41",
		".complexSwiper42",
		"#complexSwiper4Prev",
		"#complexSwiper4Next"
	);
});

// Advantages, Solutions
createSwiper(".swiper", 18, "auto");

// Team - about-production.html
createSwiper(".team-swiper", 22, "auto");

// Partners
createSwiper(".partnersSwiper", 60, 2);

// Docs - about-production.html
createSwiper(".docs-swiper", 40, "auto");

createSwiper(".products-swiper", 30, "auto");

createSwiper(".functions-swiper", 18, "auto");

// Groups
const groupSwiperPrev = document.getElementById("groupSwiperPrev");
const groupSwiperNext = document.getElementById("groupSwiperNext");
const groupSwiper = new Swiper(".groupSwiper", {
	spaceBetween: 0,
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

if (groupSwiperPrev && groupSwiperNext) {
	groupSwiperPrev.addEventListener("click", () => {
		groupSwiper.slidePrev();
	});
	groupSwiperNext.addEventListener("click", () => {
		groupSwiper.slideNext();
	});
}
