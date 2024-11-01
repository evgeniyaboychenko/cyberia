import logo from '../../assets/images/svg/logo.svg';
import Layout from '../layout';
import Nav from '../nav';
import Contacts from '../contacts';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <footer className='footer'>
      <Layout>
        <div className='footer__wrap'>
          <div className='footer__column'>
            {/* <a className='footer__logo' href='#'>
              <img src={logo} />
            </a> */}
            <Link className='footer__logo' to='/'>
              <img src={logo} />
            </Link>
            <p className='footer__about'>Веб-разработка и усиление IT-команд</p>
          </div>
          <div className='footer__container'>
            <Contacts></Contacts>
            {/* <div className='footer__contacts'>
              <a className='footer__phone' href={`tel:${phone.href}`}>
                {phone.text}
              </a>
              <a className='footer__phone' href={`mailto:${mail.href}`}>
                {mail.text}
              </a>
              <div className='footer__address'>{address}</div>
            </div> */}
            <Nav mod={'--footer'}></Nav>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
