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

// Product section swiper
const productSwiperPrevButton = document.getElementById("productSwiperPrev");
const productSwiperNextButton = document.getElementById("productSwiperNext");
const productSwiper = new Swiper(".productSwiper", {
	autoplay: true,
	spaceBetween: 20,
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
});
aboutSwiperNextButton.addEventListener("click", () => {
	aboutSwiper.slideNext();
});
aboutSwiperPrevButton.addEventListener("click", () => {
	aboutSwiper.slidePrev();
});

// Project1 section swiper
const projectSwiperPrevButton = document.getElementById("projectSwiperPrev");
const projectSwiperNextButton = document.getElementById("projectSwiperNext");
const projectSwiper11 = new Swiper(".projectSwiper11", {
	autoplay: true,
	spaceBetween: 20,
});
const projectSwiper12 = new Swiper(".projectSwiper12", {
	slidesPerView: 4,
	slideToClickedSlide: true,
	spaceBetween: 20,
});

projectSwiper11.on("slideChange", () => syncSwipers(projectSwiper11, projectSwiper12, 1));
projectSwiper12.on("click", () => syncSwipers(projectSwiper11, projectSwiper12, 2));

projectSwiperNextButton.addEventListener("click", () => {
	projectSwiper11.slideNext();
});
projectSwiperPrevButton.addEventListener("click", () => {
	projectSwiper11.slidePrev();
});

// Project2 section swiper
const project2SwiperPrevButton = document.getElementById("project2SwiperPrev");
const project2SwiperNextButton = document.getElementById("project2SwiperNext");
const projectSwiper21 = new Swiper(".projectSwiper21", {
	autoplay: true,
	spaceBetween: 20,
});
const projectSwiper22 = new Swiper(".projectSwiper22", {
	slidesPerView: 4,
	slideToClickedSlide: true,
	spaceBetween: 20,
});

projectSwiper21.on("slideChange", () => syncSwipers(projectSwiper21, projectSwiper22, 1));
projectSwiper22.on("click", () => syncSwipers(projectSwiper21, projectSwiper22, 2));

project2SwiperNextButton.addEventListener("click", () => {
	projectSwiper21.slideNext();
});
project2SwiperPrevButton.addEventListener("click", () => {
	projectSwiper21.slidePrev();
});

// Advantages, Solutions
const swiper = new Swiper(".swiper", {
	spaceBetween: 18,
	slidesPerView: 2,
});

// Partners
const partnersSwiper = new Swiper(".partnersSwiper", {
	spaceBetween: 60,
	slidesPerView: 2,
});
