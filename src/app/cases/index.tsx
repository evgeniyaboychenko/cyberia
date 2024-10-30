import Page from '../../components/page'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'
import CaseList from '../../components/case-list'

interface Props {
  handleClose?: (value: boolean) => void
}

function Cases({ ...props }: Props) {
  const { handleClose = () => {} } = props
  return (
    <Page
      header={<Header handleClose={handleClose} />}
      main={
        <Layout>
          <Breadcrumbs></Breadcrumbs>
          <CaseList></CaseList>
        </Layout>
      }
      footer={<Footer />}
    />
  )
}

export default Cases
