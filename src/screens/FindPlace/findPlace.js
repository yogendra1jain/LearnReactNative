import React,{Component} from 'react';
import {View,Text,FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import PlacesList from '../../components/PlacesList/placeList'
class FindPlaceScreen extends Component
{
constructor(props)
{
    super(props);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.state = {isLoading:true}
}
onNavigatorEvent = event=>
{

    if(event.type=="NavBarButtonPress")
    {
      
    
        if(event.id=="navigation_main")
        {
           
            this.props.navigator.toggleDrawer({
                side:'left'
            })
        }
    }
}
showItem = (key)=>
{
let place =  this.props.places.find(place=>
{
    if(place.key==key)
    return true
})
this.props.navigator.push(
    {
        screen:'awesome-places.PlaceDetail',
        title:place.name,
        passProps:{selectedPlace:place}
    }
)
}
componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

render()
{
    console.log(this.state.dataSource);
    if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
  
      return(
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={(item, index) => index}
          />
      </View>  );
}
}
function mapStateToProps(state)
{
    return {places:state.places.places}
}
export default connect(mapStateToProps,null)(FindPlaceScreen)