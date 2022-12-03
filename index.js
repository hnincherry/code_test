/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import App from './src/app';
import store from './src/store';
import { name as appName } from './app.json';

const app = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => app);
