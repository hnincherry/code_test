/**
 * @format
 */

import { AppRegistry } from 'react-native';

import App from './src/app';
import { name as appName } from './app.json';

const app = () => {
    return (
        <App />
    )
}
AppRegistry.registerComponent(appName, () => app);
