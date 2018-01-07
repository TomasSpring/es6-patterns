
export default class LoggerOne {
  constructor (name){
    this.name  = name;
    this.LogHeader =  '[' + name + ']';
  }

  getName () {
    return this.name;
  }

  getType () {
    return "LoggerOne";
  }

  showInfo (msg) {
    console.info(this.LogHeader  + '[I]: ' + msg);
  }

  debugInfo (msg) {
    console.info(this.LogHeader + '[D]: ' + msg);
  }

}
