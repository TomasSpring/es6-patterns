export default class CommandControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  onCommand(arg) {
    this.command.on(arg);
  }

  offCommand () {
    this.command.off();
  }
}
