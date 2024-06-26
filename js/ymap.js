ymaps.ready(() => {
	var map = new ymaps.Map("map", {
		center: [55.751574, 37.573856],
		zoom: 10,
	});

	if (map) {
		ymaps.modules.require(["Placemark", "Circle"], function (Placemark, Circle) {
			var placemark = new Placemark([55.37, 35.45]);
		});
	}
});
