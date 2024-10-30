import { useState } from 'react';
import Nav from '../nav';
import Contacts from '../contacts';
import './style.scss';

interface Props {
  handleClose: (value: boolean) => void;
}

function BurgerMenu({ ...props }: Props) {
  const { handleClose } = props;
  const [value, setValue] = useState('');

  return (
    <section className='burger-menu'>
      <div className='burger-menu__overlay' onClick={() => handleClose(false)}></div>
      <div className='burger-menu__container'>
        <div className='burger-menu__body'>
          <button type='button' className='burger-menu__close' onClick={() => handleClose(false)}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M24.4844 23.9707L7.51381 7.00014'
                stroke='#EEF3FF'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M7.51562 24L24.4862 7.02944'
                stroke='#EEF3FF'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
          <div className='burger-menu__block'>
            <Nav mod={'--burger-menu'}></Nav>
          </div>

          <div className='burger-menu__block'>
            <h3 className='burger-menu__subtitle'>Контакты:</h3>
            <Contacts></Contacts>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BurgerMenu;