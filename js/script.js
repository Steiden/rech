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

const desktopCatalogButton = document.getElementById("desktopCatalogButton");
const catalog = document.getElementById("catalog");
let desktopCatalogButtonIsCliked = false;

desktopCatalogButton.addEventListener("click", () => {
	if (!desktopCatalogButtonIsCliked) {
		catalog.classList.add("catalog--visible");
		desktopCatalogButtonIsCliked = true;
	} else {
		catalog.classList.remove("catalog--visible");
		desktopCatalogButtonIsCliked = false;
	}
});

window.addEventListener("click", (e) => {
	if (e.target !== desktopCatalogButton && e.target !== catalog) {
		catalog.classList.remove("catalog--visible");
		desktopCatalogButtonIsCliked = false;
	}
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
