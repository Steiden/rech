const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: resolve(__dirname, "views/about-production.html"),
				home: resolve(__dirname, "views/home.html"),
				documentation: resolve(__dirname, "views/documentation.html"),
				contacts: resolve(__dirname, "views/contacts.html"),
				catalog: resolve(__dirname, "views/catalog.html"),
				card: resolve(__dirname, "views/card.html"),
				projects: resolve(__dirname, "views/projects.html"),
				project: resolve(__dirname, "views/project.html"),
				services: resolve(__dirname, "views/services.html"),
				electrolaboratory: resolve(__dirname, "views/electrolaboratory.html"),
				engineering_center: resolve(__dirname, "views/engineering-center.html"),
				partners: resolve(__dirname, "views/partners.html"),
				404: resolve(__dirname, "views/404.html"),
				career: resolve(__dirname, "views/career.html"),
			},
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
			},
		},
	},
});
