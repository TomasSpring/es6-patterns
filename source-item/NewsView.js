export default class View {
	constructor(model) {
		this.model = model;
	}

	showCountNews() {
		this.model.showCountNews();
		console.log('News shown.');
	}

	renderNewsToDOM() {
		this.model.render();
		console.log('Render done.');
	}
}
