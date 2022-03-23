import type {NextPage} from 'next';
import Layout from '../../../../components/Layout/Layout';
import AddItems from '../../../../components/page/AddItems';
import Provider from '../../../../store/hoc/Provider';


const AddItem: NextPage = () => {
    return (
        <Layout>
            <Provider>
                <AddItems/>
            </Provider>
        </Layout>
    )
}

export default AddItem;