import type { NextPage } from 'next';
import Layout from '../../../components/Layout/Layout';
import SelectItemPage from '../../../components/page/SelectItemPage';
import Provider from '../../../store/hoc/Provider';



const Select: NextPage = () => {
  return (
    <Layout>
        {/* <Provider> */}
          <SelectItemPage/>
        {/* </Provider> */}
    </Layout>
  )
}

export default Select;
