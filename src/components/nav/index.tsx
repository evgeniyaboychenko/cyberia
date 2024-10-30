import { navList } from '../../data/nav'
import { Link } from 'react-router-dom'
import './style.scss'

interface Props {
  mod?: string
}

function Nav({ mod }: Props) {
  const className = mod ? `nav nav${mod}` : 'nav'
  return (
    <nav className={className}>
      <ul className='nav__list'>
        {navList.map((item, index) => (
          <li className='nav__item' key={index}>
            <Link to={item.href}>{item.text}</Link>
            {/* <a href={item.href}>{item.text}</a> */}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
