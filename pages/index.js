import {GET_ALL_CHANELL_BUTTON} from '../config/config';
import sources from '../source-json/source.json';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    GET_ALL_CHANELL_BUTTON.onclick = e => import( './show-news-button.js')
        .then(module => {
            let target = e.target;
            let source = null;
            if (target.classList.contains('source-list-img')) {
                if (target.dataset) {
                   source  = target.dataset.chanel;
                    
                }
                else {
                    source =  target.getAttribute('data-chanel');
                }
            }
            let showNewsButton = module.default;
            showNewsButton(source);
        })
        .catch((e) => {
            console.error('error: ', e)
        });
        
      
});
