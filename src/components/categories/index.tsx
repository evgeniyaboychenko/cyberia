import { toJS } from 'mobx';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';

import './style.scss';

const CategoryList = observer(() => {
  const store = useStores();

  useEffect(() => {
    void store.categoriesStore.loadCategories();
  }, []);

  return (
    <ul className='categories'>
      {toJS(store.categoriesStore.categoryList).map((item) => (
        <li
          className={`categories__item${store.categoriesStore.category === item.id ? ' isActive' : ''}`}
          key={item.id}
        >
          <button
            className='categories__btn'
            type='button'
            onClick={() => void store.categoriesStore.onFilter(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
});

export default CategoryList;
