import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
const startTabs = () =>
{
    Promise.all([Icon.getImageSource('md-map',30),
    Icon.getImageSource('ios-share-alt',30),
    Icon.getImageSource('ios-menu',30)])
   
    .then(sources=>
    {
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen:'awesome-places.SharePlaces',
                    title:'Share Place',
                    label:'Share Place',
                    icon: sources[0],
                    navigatorButtons:{
                        leftButtons:[
                        {
                            icon:sources[2],
                            title:"Menu",
                            id:'navigation_main'
                        }]
                    }
                  },
                  {
                    screen:'awesome-places.FindPlace',
                    title:'Find Place',
                    label:'Find place',
                    icon: sources[1],
                    navigatorButtons:{
                        leftButtons:[
                        {
                            icon:sources[2],
                            title:"Menu",
                            id:'navigation_main'
                        }]
                    }
                    
                    
                  }
            ],
            
            drawer: { // optional, add this if you want a side menu drawer in your app
              left: { // optional, define if you want a drawer from the left
                screen: 'awesomePlaces.drawer', // unique ID registered with Navigation.registerScreen
                passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
                //fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
              
            }
            
        }
        })
    })
    

}
export default startTabs