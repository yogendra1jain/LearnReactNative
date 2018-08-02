import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/auth';
import SharePlacesScreen from './src/screens/SharePlace/sharePlace';
import FindPlaceScreen from './src/screens/FindPlace/findPlace';
//Register screen
import {Provider} from 'react-redux';
import configureStore  from './src/Store/configureStore';
import PlaceDetail from './src/components/PlaceDetail/placeDetail'
import DrawerScreen from './src/screens/Drawer/drawerScreen'
const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen",()=>AuthScreen,store,Provider);
Navigation.registerComponent("awesome-places.SharePlaces",()=>SharePlacesScreen,store,Provider)
Navigation.registerComponent("awesome-places.FindPlace",()=>FindPlaceScreen,store,Provider)
Navigation.registerComponent("awesome-places.PlaceDetail",()=>PlaceDetail);
Navigation.registerComponent("awesomePlaces.drawer",()=>DrawerScreen);

//start the app

Navigation.startSingleScreenApp({
  screen:{
    screen:'awesome-places.AuthScreen',
    title:'Login screen'
  }
})