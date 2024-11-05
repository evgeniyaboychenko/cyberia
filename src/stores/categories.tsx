import RootStore from './root-store';
import axios from 'axios';

import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';
import { Categories, ResponseDataCategories } from '../types';

class CategoriesStore {
  rootStore: RootStore;
  categories: Categories[] = [];
  isLoading = false;
  category = '';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  loadCategories = async () => {
    try {
      this.isLoading = true;
      const res = await axios.get<ResponseDataCategories>(`/api/v1/project-categories`, {});
      if (res.status === 200) {
        runInAction(() => {
          this.categories = res.data.items;
          this.isLoading = false;
        });
      }
    } catch (err) {
      this.isLoading = false;
      console.error(err);
    }
  };

  onFilter = (id: string) => {
    this.category = id;
  };
}

export default CategoriesStore;
