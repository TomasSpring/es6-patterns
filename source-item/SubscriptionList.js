export default class SubscriptionList {

  constructor(description = 'Unknown description') {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  subscribe() {
    throw new Error("Override this method!");
  }
}
