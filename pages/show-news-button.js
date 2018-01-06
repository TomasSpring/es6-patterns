import News from '../source-item/source-item';
import { DEFAUL_SOURCE,API_KEY,URL,ROOT_NODE,NEWS_BLOCK,GET_ALL_CHANELL_BUTTON} from '../config/config';

export default (sources) => {
    let newsInstance = new News();
    newsInstance.init(sources);
}

