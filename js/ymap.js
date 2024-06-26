const mapMarker = /*html*/ `<img src="/assets/img/mark.svg" class="footer__mark" />`;

ymaps.ready(() => {
	const map = new ymaps.Map("ymap", {
		center: [58.103323, 56.302211],
		zoom: 15,
	});

	const marker1 = new ymaps.Placemark(
		[58.101321, 56.303213],
		{},
		{
			iconLayout: "default#image",
			iconImageHref: "/assets/img/mark.svg",
			iconImageSize: [35, 55],
			iconImageOffset: [-3, -42],
		}
	);
	const marker2 = new ymaps.Placemark(
		[58.103323, 56.304111],
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
