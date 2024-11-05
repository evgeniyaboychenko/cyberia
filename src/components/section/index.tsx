import { ReactNode } from 'react';
import Layout from '../layout';
import './style.scss';
import { observer } from 'mobx-react-lite';

interface Props {
  children: ReactNode;
  title?: ReactNode;
  mod?: string;
}

const Section = observer(({ ...props }: Props) => {
  const { title, mod, children } = props;
  const className = mod ? `section section${mod}` : 'section';
  return (
    <section className={className}>
      <Layout>
        <h2 className='section__title'>{title}</h2>
        {children}
      </Layout>
    </section>
  );
});

export default Section;
