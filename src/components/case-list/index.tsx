import { caseList } from '../../data/cases'
import Case from '../case'
import './style.scss'

function CaseList() {
  // const { href, title, img, description } = props
  // const className = mod ? `nav nav${mod}` : 'nav'
  return (
    <ul className='case-list'>
      {caseList.map((item, index) => (
        <li key={index}>
          <Case {...item}></Case>
        </li>
      ))}
    </ul>
  )
}

export default CaseList
