import {GET_ALL_CHANELL_BUTTON, SUBSCRIBE_BUTTON} from '../config/config';

import RenderCommand from '../utils/RenderCommand';
import CommandControl from '../utils/CommandControl';
import LightingIcon from '../utils/LightingIcon';

import sources from '../source-json/source.json';
import './index.scss';


import Music from '../source-item/Music';
import Weather from '../source-item/Weather';
import ContinueSubscription from '../source-item/ContinueSubscription';

import LoggerOne from '../adapterLogger/LoggerOne';
import LoggerTwo from '../adapterLogger/LoggerTwo';
import LoggerAdapter from '../adapterLogger/LoggerAdapter';


let commandControl = new CommandControl();
let lightingIconInstance = new LightingIcon();
let renderCommand = new RenderCommand (lightingIconInstance);

let loggerOne = new LoggerOne("One");
let logger = new LoggerAdapter (loggerOne);



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
            commandControl.setCommand(renderCommand);
            commandControl.offCommand();
            commandControl.onCommand(target);
            let showNewsButton = module.default;
            showNewsButton(source);
        })
        .catch((e) => {
            console.error('error: ', e)
        });

        SUBSCRIBE_BUTTON.addEventListener('click', (e)=> {
              logger.information ("Subscription is active. No problem");
              let subscribeList = new Music("Music");
              subscribeList = new ContinueSubscription(subscribeList);
             logger.information(subscribeList.subscribe());
            });
});
