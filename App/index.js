/**
 * @File : App/index.js
 */

import {registerRootComponent} from 'expo';
import MainActivity from './components';

const Test = () => <MainActivity />;

registerRootComponent(Test);