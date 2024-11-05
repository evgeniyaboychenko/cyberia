import Page from '../../components/page';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import Section from '../../components/section';
import CaseList from '../../components/case-list';
import Form from '../../containers/form';
import CategoryList from '../../components/categories';
import { observer } from 'mobx-react-lite';

// interface Props {
//   openMenu: (value: boolean) => void;
// }

const Cases = observer(() => {
  // const { openMenu } = props;
  // console.log('sddsds;ds');
  return (
    <Page
      header={<Header />}
      main={
        <>
          <Layout>
            <Breadcrumbs></Breadcrumbs>
          </Layout>
          <Section title={'Кейсы'}>
            <CategoryList></CategoryList>
            <CaseList></CaseList>
          </Section>
          <Section mod='--form' title={'Расскажите о\u00A0вашем проекте:'}>
            <Form></Form>
          </Section>
        </>
      }
      footer={<Footer />}
    />
  );
});

export default Cases;
