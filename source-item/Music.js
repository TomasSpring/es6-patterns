import SubscriptionList from './SubscriptionList';

export default class Music extends SubscriptionList {
  subscribe() {
    console.log ("Music");
    return 8.99;
  }
}
