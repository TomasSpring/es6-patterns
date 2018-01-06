import News from '../source-item/source-item';
import { DEFAUL_SOURCE,API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON} from '../config/config';

export default (sources) => {
    let newsInstance1 = new News();
    let newsInstance2 = new News ();
    newsInstance1.init(sources);
    console.log("Is the newsInstance1  the same instance that newsInstance2? " + (newsInstance1 === newsInstance2));
}
