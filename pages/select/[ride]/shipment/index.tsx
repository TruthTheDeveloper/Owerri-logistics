import type { NextPage } from 'next';
import Layout from '../../../../components/Layout/Layout';
import ShipmentMethod from '../../../../components/page/ShipmentMethod';



const Shipment: NextPage = () => {
  return (
    <Layout>
       <ShipmentMethod/>
    </Layout>
  )
}

export default Shipment;
