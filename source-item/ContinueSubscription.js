import AdditionalDecaratorActions from './AdditionalDecaratorActions';

export default class ContinueSubscription extends AdditionalDecaratorActions {
  constructor(subscription) {
    super();
    this.subscription = subscription;
  }

  getDescription() {
    return this.subscription.getDescription() + ', Continue';
  }

  subscribe() {
    return 0.20 + this.subscription.subscribe();
  }
}
