import News from '../source-item/source-item';

export default class NewsFactory {
  createNews  (type, props) {
    let newsClass = News;
    switch(type) {
      case "political":
        return new newsClass("political news");
      case "economy":
        return new newsClass("economyNews");
    }
  }
}
