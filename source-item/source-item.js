import {DEFAULT_SOURCE,API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON,COUNT_BLOCK} from '../config/config';

import EventObserver from '../utils/eventObserver';
import SubscriptionList from './SubscriptionList';

import './source-item.scss';

let instance = null;

export default class News extends SubscriptionList {

  static get instance() {
    return instance;
  }

  static set instance(_instance) {
    instance = _instance;
  }
/* Singleton pattern example */
  constructor (description) {
    super ();
    this.description = description;
    console.log (description + " news were called!");
    if (News.instance === null) {
      News.instance = this;
    }

    return News.instance;
  }

  getInstance() {
    return new News();
  }
      /**
     * Inits instance
     * @param node - DOM node to instantiate class
     */
    init(sources) {
      this.ARTICLES_COUNT = 0;
      this.pubsub = new EventObserver();
      this.pubsub.subscribe('showCount', this.showCountNews, this);

        if(sources) {
            this.sendRequest(sources);
        }
        else {
           this.sendRequest(DEFAULT_SOURCE);
        }
  };
    /**
   * show count of news
   */
   showCountNews () {
     COUNT_BLOCK.innerHTML = this.ARTICLES_COUNT;
   }

    getCountNews() {
      this.pubsub.publish('showCount');
    }

    subscribe() {
      return 5.99;
    }
    /**
     * Builds url to make fetch request
     * @param source {String} - news source
     * @returns {string} - url
     */
     buildUrl(source) {
        if (source && source.length > 0) {
            return `${URL}${source}&apiKey=${API_KEY}`
        }
    };

    /**
     * Sends fetch request
     * @param source {String} - news source
     */
     sendRequest(source) {
        let url = this.buildUrl(source);
        fetch(url).
        then((response) => this.parseJSON(response)).
        then((data) => this.parseData(data)).
        then((nodes) => this.render({
                nodes
        })).catch ((err)=> console.log(err));
    };

    /**
     * Parses data from response
     * @param data {Object} - data from API
     * @returns {Array|*|{}}
     */
     parseJSON(data) {
        return data.json();
    };

    /**
     * Renders result to DOM
     * @param stringNodes {String} - assembled news items
     */
    render({
        nodes: stringNodes
    }) {
         stringNodes.map((el) => NEWS_BLOCK.insertAdjacentHTML('afterbegin', el));
         this.getCountNews();
    };

    /**
     * Parses data from response
     * @param data {Object} - data from API
     * @returns {Array|*|{}}
     */
     parseData(data) {
       this.ARTICLES_COUNT = data.articles.length;
        return data.articles.map((item) => {
            const {
                urlToImage,
                author,
                title,
                description,
                url
            } = item;
           return `
                <div class="news-list-item">
                    <img class="news-list-item-img" src="${urlToImage}" alt="News Article Image">
                    <div class="news-list-item-wrapper">
                        <div class="news-list-item-data">
                            <div class="news-list-item-content">
                                <span class="news-list-item-author"><span class="caption">Author: </span>${author}</span>
                                <h1 class="news-list-item-title"><a href="#">${title}</a></h1>
                                <p class="news-list-item-description">${description}</p>
                                <a href="${url}" class="news-list-item-button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
              `;

        });
    };
}
