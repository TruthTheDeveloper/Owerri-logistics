import type {NextPage} from 'next';
import Layout from '../../../../components/Layout/Layout';
import AddItems from '../../../../components/page/AddItems';
// import Provider from '../../../../store/hoc/Provider';
import { Provider } from 'react-redux';
import store from '../../../../store';


const AddItem: NextPage = () => {
    return (
        <Layout>
            {/* <Provider store={store}> */}
                <AddItems/>
            {/* </Provider> */}
        </Layout>
    )
}

export default AddItem;