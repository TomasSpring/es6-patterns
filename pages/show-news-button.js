import News from '../source-item/source-item';
import NewsFactory from '../source-item/NewsFactory';
import { DEFAUL_SOURCE,API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON} from '../config/config';


export default (sources) => {

    let newsInstance1 = new News();
    let newsInstance2 = new News ();
    newsInstance1.init(sources);
    console.log("Check Singleton. Is the newsInstance1  the same instance that newsInstance2? " + (newsInstance1 === newsInstance2));

    /*Simple Factory*/
    const factory = new NewsFactory()
    const news = factory.createNews( "economy", {});
    console.log(news);
}
