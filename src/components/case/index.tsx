import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './style.scss';

interface Props {
  project_url: string;
  title: string;
  description: string;
  image: string;
}

const Case = observer(({ ...props }: Props) => {
  const { project_url, title, image, description } = props;
  return (
    <div className='case'>
      <img className='case__image' src={image} />
      <Link className='case__title' to={project_url}>
        {title}
      </Link>
      <p className='case__description'>{description}</p>
    </div>
  );
});

export default Case;
