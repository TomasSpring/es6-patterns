import Command from './Command';

export default class RenderCommand extends Command {

  constructor(_instance) {
    super();
    this.instance = _instance;
  }

  on(element) {
    this.instance.lightingOn(element);
  }
  off () {
    this.instance.lightingOff();
  }
}
