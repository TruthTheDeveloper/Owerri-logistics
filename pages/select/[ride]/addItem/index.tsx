import type {NextPage} from 'next';
import Layout from '../../../../components/Layout/Layout';
import AddItems from '../../../../components/page/AddItems';


const AddItem: NextPage = () => {
    return (
        <Layout>
            <AddItems/>
        </Layout>
    )
}

export default AddItem;