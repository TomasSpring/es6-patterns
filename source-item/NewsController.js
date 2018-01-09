import News from './source-item';
import View from './NewsView';

export default class NewsController {
	constructor(inst) {
		if (inst === undefined)
			inst = new News("News");
  		this.model = inst;
		  this.view = new View(this.model);
	}

	getInstance() {
		return this.model.instance;
	}

	setNewsInstance(_inst) {
		this.model.instance = _inst;
	}

	getNewsInstance() {
		return this.model.getInstance();
	}

	initNewsInstance(srcs) {
		this.model.init(srcs);
	}

	parseNewsData(data) {
		return this.module.parseData();
	}

	parseNewsJSON(data) {
        return this.model.parseJSON();
    }

    buildNewsURL(src) {
    	return this.model.buildURL(src);
    }

    subscribeForNews() {
    	return this.model.subscribe();
    }

    getNewsCount() {
    	this.model.getCountNews();
    }
}
