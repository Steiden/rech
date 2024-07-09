const createTabs = (tabsSelector, contentSelectors) => {
	const tabsContainer = document.querySelector(tabsSelector);
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

createTabs(".cardTabs", ["#cardTabContent1", "#cardTabContent2"]);
