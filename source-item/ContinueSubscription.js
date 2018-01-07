import AdditionalDecaratorActions from './AdditionalDecaratorActions';

export default class ContinueSubscription extends AdditionalDecaratorActions {
  constructor(subscription) {
    super();
    this.subscription = subscription;
  }

  getDescription() {
    return this.subscription.getDescription() + ', Continue';
  }
  /**
   * Get total subscription cost
   * @param source {String} - news source
   */
  subscribe() {
    return 0.20 + this.subscription.subscribe();
  }
}
