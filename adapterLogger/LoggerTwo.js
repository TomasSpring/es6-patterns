
export default class LoggerTwo {
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
    console.info(this.LogHeader +  'INFORMATION: ' + msg);
  }

  debugInfo (msg) {
    console.info(this.LogHeader +  'DEBUG: ' + msg);
  }

}
