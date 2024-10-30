import { mail, phone, address } from '../../data/contacts'
import './style.scss'

function Contacts() {
  return (
    <div className='contacts'>
      <a className='contacts__link' href={`tel:${phone.href}`}>
        {phone.text}
      </a>
      <a className='contacts__link' href={`mailto:${mail.href}`}>
        {mail.text}
      </a>
      <div className='contacts__address'>{address}</div>
    </div>
  )
}

export default Contacts
