import { toJS } from 'mobx';
import { useEffect } from 'react';
import Case from '../case';
import './style.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import { Cases } from '../../types';

const CaseList = observer(() => {
  const store = useStores();

  useEffect(() => {
    void store.casesStore.loadCases();
  }, []);

  const filterListByCategoryByCategory = (list: Cases[]) => {
    if (store.categoriesStore.category === '') {
      return list;
    }
    return list.filter((item) =>
      item.categories.find((category) => {
        return category.id === store.categoriesStore.category;
      })
    );
  };

  return (
    <ul className='case-list'>
      {filterListByCategoryByCategory(toJS(store.casesStore.caseList)).map((item) => (
        <li key={item.id}>
          <Case {...item}></Case>
        </li>
      ))}
    </ul>
  );
});

export default CaseList;
