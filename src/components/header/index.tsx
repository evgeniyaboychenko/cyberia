import logo from '../../assets/images/svg/logo.svg'
import Layout from '../layout'
import Nav from '../nav'
import { Link } from 'react-router-dom'
import './style.scss'

interface Props {
  handleClose: (value: boolean) => void
}

function Header({ ...props }: Props) {
  const { handleClose } = props

  // const [value, setValue] = useState('')
  return (
    <header className='header'>
      <Layout>
        <div className='header__wrap'>
          <Link className='header__logo' to='/'>
            <img src={logo} />
          </Link>
          {/* <a className='header__logo' href='#'></a> */}
          <Nav mod={'--header'}></Nav>
          {/* <nav className='header__nav'>
            <ul className='header__menu-list'>
              {navList.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav> */}

          {/* mobile version */}
          <button
            type='button'
            className='header__burger-menu btn'
            aria-label='Открыть меню'
            onClick={() => handleClose(true)}
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
  )
}

export default Header
