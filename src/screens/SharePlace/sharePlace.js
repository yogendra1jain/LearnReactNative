import React,{Component} from 'react';
import {ScrollView,View,Text,TextInput,Button,StyleSheet,Image} from 'react-native';
import {connect} from 'react-redux';
import {addPlace} from '../../Store/Actions/index'
import DefaultInput from '../../components/UI/DefaultInput'
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import imagePlaceHolder from '../../images/image1.jpg'
class SharePlaceScreen extends Component
{
constructor(props)
{
    super(props);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
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
getFilledData = (placeName)=>
{
this.props.onAddPlace(placeName)
}
render()
{
    return (
        <ScrollView >
        <View style={style.container}>
            <MainText><HeadingText>Share a Place With Us</HeadingText></MainText>
            <View style={style.placeholder}><Text>Image Preview</Text></View>
           <View style={style.button}>
            <Button title="Pick an Image"></Button>
            </View>
            <View style={style.placeholder}><Text>Map</Text></View>
            <View style={style.button}>
            <Button title="Locate Me"> </Button>
            </View>
            <DefaultInput placeholder="Place Name"/>
            <View style={style.button}>
            <Button title="Share the Place"/>
            </View>
            </View>
        </ScrollView>
    )
}
}
const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    button:{
        margin:8
    },
   placeholder:{
       borderWidth:1,
       borderColor:"black",
       backgroundColor:'#eee',
       width:"80%",
       height:150
   }
})
function mapDispatchToProps(dispatch)
{
    return {
        onAddPlace : (placeName)=>dispatch(addPlace(placeName))
    }
}
export default connect(null,mapDispatchToProps)(SharePlaceScreen)