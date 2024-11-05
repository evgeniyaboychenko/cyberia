import RootStore from './root-store';
import axios from 'axios';

import { runInAction } from 'mobx';
import { makeAutoObservable } from 'mobx';

import { Cases, ResponseDataCases } from '../types';

class CasesStore {
  rootStore: RootStore;
  caseList: Cases[] = [];
  isLoading = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  loadCases = async () => {
    try {
      this.isLoading = true;
      const res = await axios.get<ResponseDataCases>(`/api/v1/projects`, {});

      if (res.status === 200) {
        runInAction(() => {
          this.caseList = res.data.items;
          this.isLoading = false;
        });
      }
    } catch (err) {
      this.isLoading = false;
      console.error(err);
    }
  };
}

export default CasesStore;
