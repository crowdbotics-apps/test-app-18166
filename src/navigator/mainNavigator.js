import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile67667Navigator from '../features/UserProfile67667/navigator';
import Maps67648Navigator from '../features/Maps67648/navigator';
import Settings67626Navigator from '../features/Settings67626/navigator';
import Settings67611Navigator from '../features/Settings67611/navigator';
import NotificationList67610Navigator from '../features/NotificationList67610/navigator';
import Maps67609Navigator from '../features/Maps67609/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile67667: { screen: UserProfile67667Navigator },
Maps67648: { screen: Maps67648Navigator },
Settings67626: { screen: Settings67626Navigator },
Settings67611: { screen: Settings67611Navigator },
NotificationList67610: { screen: NotificationList67610Navigator },
Maps67609: { screen: Maps67609Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
