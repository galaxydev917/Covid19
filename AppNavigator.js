import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Tabs from './src/component/Tabs';
import Report from './src/component/Report';

const RootStack = createStackNavigator({
  "HomePage": { 
    screen: Tabs,
    navigationOptions: {
      headerShown : false
    }
  },
  "Report": { 
    screen: Report,
    navigationOptions: {
      headerShown : false
    }
  }
   
});
const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;


