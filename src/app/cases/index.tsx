import Page from '../../components/page';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import Section from '../../components/section';
import CaseList from '../../components/case-list';
import Form from '../../containers/form';

interface Props {
  handleClose?: (value: boolean) => void;
}

function Cases({ ...props }: Props) {
  const { handleClose = () => {} } = props;
  return (
    <Page
      header={<Header handleClose={handleClose} />}
      main={
        <>
          <Layout>
            <Breadcrumbs></Breadcrumbs>
          </Layout>
          <Section title={'Кейсы'}>
            <CaseList></CaseList>
          </Section>
          <Section mod='--form' title={'Расскажите о вашем проекте:'}>
            <Form></Form>
          </Section>
        </>
      }
      footer={<Footer />}
    />
  );
}

export default Cases;
