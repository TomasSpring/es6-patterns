import LoggerOne from './LoggerOne';
import LoggerTwo from './LoggerTwo';

export default class  LoggerAdapter {

  constructor (loggerType) {
    this.LOGGER_ONE = 'LoggerOne';
    this.LOGGER_TWO = 'LoggerTwo';
    this.INFO = 'INFO';
    this.DEBUG = 'DEBUG';
    this.loggerMapper = {};
    if (loggerType) {
      console.log("You use" + loggerType.getName() + " logger" );
    }
    else {
      throw Error ("You must define logger type!");
    }
    if(loggerType.getType() === this.LOGGER_ONE) {
          this.loggerMapper[this.DEBUG] = loggerType.debugInfo;
          this.loggerMapper[this.INFO] = loggerType.showInfo;
      }
      else if (loggerType.getType() === this.LOGGER_TWO) {
          this.loggerMapper[this.DEBUG] = loggerType.debugInfo;
          this.loggerMapper[this.INFO] = loggerType.showInfo;
      }

  }


  information(message) {

          this.loggerMapper[this.INFO](message);

    };

    debug(message) {

          this.loggerMapper[this.DEBUG](message);

    };

}
