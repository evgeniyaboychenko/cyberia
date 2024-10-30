import { Link } from 'react-router-dom'
import './style.scss'

interface Props {
  href: string
  title: string
  description: string
  image: string
}

function Case({ ...props }: Props) {
  const { href, title, image, description } = props
  return (
    <div className='case'>
      <img className='case__image' src={image} />
      <Link className='case__title' to={href}>
        {title}
      </Link>
      <p className='case__description'>{description}</p>
    </div>
  )
}

export default Case
