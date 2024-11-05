import RootStore from './root-store';
import { makeAutoObservable } from 'mobx';

class BurgerMenuStore {
  rootStore: RootStore;
  isOpen = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  onShow() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }
}

export default BurgerMenuStore;
