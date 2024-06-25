import Swiper from "swiper";
import "swiper/css";

// Header
const header = document.getElementById("header");
const headerMenu = document.getElementById("headerMenu");

const catalogButton = document.getElementById("catalogButton");
const closeCatalogButton = document.getElementById("closeCatalogButton");

catalogButton.addEventListener("click", () => {
	catalogButton.style.display = "none";
	closeCatalogButton.style.display = "flex";
	header.classList.add("header--all");
	headerMenu.style.display = "flex";
});

closeCatalogButton.addEventListener("click", () => {
	catalogButton.style.display = "flex";
	closeCatalogButton.style.display = "none";
	header.classList.remove("header--all");
	headerMenu.style.display = "none";
});


// Map
const markers = document.querySelectorAll(".map__marker");
markers.forEach((marker) => {
	marker.addEventListener("click", (e) => {
		if (marker.classList.contains("map__marker--active")) {
			marker.classList.remove("map__marker--active");
			marker.querySelector(".marker__button").style.zIndex = 50;
		} else {
			marker.classList.add("map__marker--active");
			marker.querySelector(".marker__button").style.zIndex = 55;
		}
	});
});
