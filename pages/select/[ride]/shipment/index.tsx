import type { NextPage } from 'next';
import Layout from '../../../../components/Layout/Layout';
import ShipmentMethod from '../../../../components/page/ShipmentMethod';
import Provider from '../../../../store/hoc/Provider';



const Shipment: NextPage = () => {
  return (
    <Layout>
       <Provider>
        <ShipmentMethod/>
       </Provider>
    </Layout>
  )
}

export default Shipment;
