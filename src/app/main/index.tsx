import Page from '../../components/page';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';

interface Props {
  handleClose?: (value: boolean) => void;
}

function Main({ ...props }: Props) {
  const { handleClose = () => {} } = props;
  return (
    <Page
      header={<Header handleClose={handleClose} />}
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
}

export default Main;
