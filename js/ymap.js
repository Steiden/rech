const mapMarker = /*html*/ `<img src="/assets/img/mark.svg" class="footer__mark" />`;

ymaps.ready(() => {
	const map = new ymaps.Map("ymap", {
		center: [58.099775, 38.741185],
		zoom: 15,
	});

	map.behaviors.disable('scrollZoom');

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
		[58.096765, 38.737170],
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
