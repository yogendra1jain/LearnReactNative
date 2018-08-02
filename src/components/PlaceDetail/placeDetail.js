import React from 'react';
import {Image,Text,View,Button,Modal,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const PlaceDetail = (props) =>
{

return(

        <View>
        
            <View  style={style.buttonStyle}>
            <View> 
                <Image style={style.imageStyle} source={props.selectedPlace.placeImage}/>
                <Text style={style.textStyle}>{props.selectedPlace.name}</Text>
            </View>
            <TouchableOpacity onPress={props.deletePlace}> 
            <View style={style.deleteIconStyle}>
                
                <Icon size={30} name={'ios-trash'} color='red'/>
            </View>
            </TouchableOpacity>
            </View>
        </View>
)
}
const style = StyleSheet.create({
    imageStyle:{
        width:'100%',
        height:200,
        marginTop:10
    },
    buttonStyle:{
        marginTop:5,
        marginBottom:5
    },
    textStyle:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    deleteIconStyle:{
        alignItems:'center'
    }
})
export default PlaceDetail;