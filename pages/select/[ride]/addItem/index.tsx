import type {NextPage} from 'next';
import Layout from '../../../../components/Layout/Layout';
import AddItems from '../../../../components/AddItems';


const AddItem: NextPage = () => {
    return (
        <Layout>
            <AddItems/>
        </Layout>
    )
}

export default AddItem;