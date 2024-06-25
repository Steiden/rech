import Swiper from "swiper";
import "swiper/css";

const syncSwipers = (swiper1, swiper2, swiperNumber) => {
	if (swiperNumber === 1) {
		swiper2.activeIndex = swiper1.activeIndex;
		swiper2.slideTo(swiper1.activeIndex);
	}
	if (swiperNumber === 2) {
		swiper1.activeIndex = swiper2.clickedIndex;
		swiper1.slideTo(swiper2.clickedIndex);
	}
};

const productSwiperPrevButton = document.getElementById("productSwiperPrev");
const productSwiperNextButton = document.getElementById("productSwiperNext");
const productSwiper = new Swiper(".productSwiper", {
	autoplay: true,
    spaceBetween: 20,
	navigation: {
		nextEl: "#productSwiperNext",
		prevEl: "#productSwiperPrev",
	},
});
const productSwiper2 = new Swiper(".productSwiper2", {
	slidesPerView: 4,
	slideToClickedSlide: true,
    spaceBetween: 20,
});

productSwiper.on("slideChange", () => syncSwipers(productSwiper, productSwiper2, 1));
productSwiper2.on("click", () => syncSwipers(productSwiper, productSwiper2, 2));

productSwiperNextButton.addEventListener("click", () => {
	productSwiper.slideNext();
});
productSwiperPrevButton.addEventListener("click", () => {
	productSwiper.slidePrev();
});

// About section swiper
const aboutSwiperPrevButton = document.getElementById("aboutSwiperPrev");
const aboutSwiperNextButton = document.getElementById("aboutSwiperNext");
const aboutSwiper = new Swiper(".aboutSwiper", {
	autoplay: true,
    spaceBetween: 20,
	navigation: {
		nextEl: "#aboutSwiperNext",
		prevEl: "#aboutSwiperPrev",
	},
});
const aboutSwiper2 = new Swiper(".aboutSwiper2", {
	slidesPerView: 4,
	slideToClickedSlide: true,
    spaceBetween: 20,
});

aboutSwiper.on("slideChange", () => syncSwipers(aboutSwiper, aboutSwiper2, 1));
aboutSwiper2.on("click", () => syncSwipers(aboutSwiper, aboutSwiper2, 2));

aboutSwiperNextButton.addEventListener("click", () => {
	aboutSwiper.slideNext();
});
aboutSwiperPrevButton.addEventListener("click", () => {
	aboutSwiper.slidePrev();
});
