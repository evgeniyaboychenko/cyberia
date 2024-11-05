import CasesStore from './cases';
import FormStore from './form-store';
import CategoriesStore from './categories';
import BurgerMenuStore from './burger-menu';

class RootStore {
  formStore: FormStore;
  casesStore: CasesStore;
  categoriesStore: CategoriesStore;
  burgerMenuStore: BurgerMenuStore;

  constructor() {
    this.formStore = new FormStore(this);
    this.casesStore = new CasesStore(this);
    this.categoriesStore = new CategoriesStore(this);
    this.burgerMenuStore = new BurgerMenuStore(this);
  }
}

export default RootStore;
