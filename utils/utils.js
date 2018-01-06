
module.exports = class Utils {

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
    };
    
    /**
     * Parses data from response
     * @param data {Object} - data from API
     * @returns {Array|*|{}}
     */
     parseData(data) {
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
};