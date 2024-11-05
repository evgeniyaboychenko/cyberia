import Page from '../../components/page';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import { observer } from 'mobx-react-lite';

const Main = observer(() => {
  return (
    <Page
      header={<Header />}
      main={
        <>
          <Layout>
            <Breadcrumbs></Breadcrumbs>
          </Layout>
        </>
      }
      footer={<Footer />}
    />
  );
});

export default Main;
