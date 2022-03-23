import type { NextPage } from 'next';
import Layout from '../../../../components/Layout/Layout';
import UploadPage from '../../../../components/page/UploadPage';
import Provider from '../../../../store/hoc/Provider';



const UploadItem: NextPage = () => {
  return (
          <UploadPage/>
  )
}

export default UploadItem;
