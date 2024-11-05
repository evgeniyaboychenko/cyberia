/* eslint-disable no-unused-vars */
import { useStores } from '../../stores';
import { observer } from 'mobx-react-lite';
import logo from '../../assets/images/svg/logo.svg';
import Layout from '../layout';
import Nav from '../nav';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = observer(() => {
  const store = useStores();

  return (
    <header className='header'>
      <Layout>
        <div className='header__wrap'>
          <Link className='header__logo' to='/'>
            <img src={logo} />
          </Link>
          <Nav mod={'--header'}></Nav>
          <button
            type='button'
            className='header__burger-menu btn'
            aria-label='Открыть меню'
            onClick={() => store.burgerMenuStore.onShow()}
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M4 16L28 16' stroke='#EEF3FF' strokeWidth='2' strokeLinecap='round' />
              <path d='M4 9L28 9' stroke='#EEF3FF' strokeWidth='2' strokeLinecap='round' />
              <path d='M4 23H28' stroke='#EEF3FF' strokeWidth='2' strokeLinecap='round' />
            </svg>
          </button>
        </div>
      </Layout>
    </header>
  );
});

export default Header;
