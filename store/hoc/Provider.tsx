import { Provider } from "react-redux";
import store from '../index';

const ProviderStore = (props: any) => {

    return <Provider store={store}>
        {props.children}
    </Provider>
}

export default ProviderStore;