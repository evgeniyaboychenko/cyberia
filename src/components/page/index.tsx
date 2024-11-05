import { ReactNode } from 'react';
import './style.scss';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores';
import BurgerMenu from '../burger-menu';

interface Props {
  main?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

const Page = observer(({ header, footer, main }: Props) => {
  const store = useStores();
  return (
    <>
      <div className='page'>
        {header}
        <main className='page__main'>{main}</main>
        {footer}
      </div>
      {store.burgerMenuStore.isOpen && <BurgerMenu></BurgerMenu>}
    </>
  );
});

export default Page;
