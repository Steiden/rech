import Swiper from "swiper";
import "swiper/css";

const images = [
	"/assets/img/products/product1.png",
	"/assets/img/background/bg-about.png",
	"/assets/img/background/bg-employees.png",
	"/assets/img/background/bg-main.png",
	"/assets/img/projects/project1.png",
];

const createSlide = (image) => {
	return /*html*/ `
        <button class="product-card__img-button swiper-slide">
            <img
                src="${image}"
                class="product-card__img product-card__img--small"
            />
        </button>
    `;
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
};

const productSwiperPrevButton = document.getElementById("productSwiperPrev");
const productSwiperNextButton = document.getElementById("productSwiperNext");
const productSwiper = new Swiper(".productSwiper", {
	autoplay: true,
	navigation: {
		nextEl: "#productSwiperNext",
		prevEl: "#productSwiperPrev",
	},
});
const productSwiper2 = new Swiper(".productSwiper2", {
	slidesPerView: 4,
	slideToClickedSlide: true,
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
	navigation: {
		nextEl: "#aboutSwiperNext",
		prevEl: "#aboutSwiperPrev",
	},
});

aboutSwiperNextButton.addEventListener("click", () => {
	aboutSwiper.slideNext();
});
aboutSwiperPrevButton.addEventListener("click", () => {
	aboutSwiper.slidePrev();
});
