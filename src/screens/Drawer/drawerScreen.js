import React,{Component} from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native'
export default class DrawerScreen extends Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        alert()
        return(
            <View style={[style.container,{width:Dimensions.get("screen").width*0.8}]}>
            <Text>
                {Dimensions.get("screen").width*0.8}
            </Text>

</View>
        )
    }
}

const style = StyleSheet.create({
container:{
    paddingTop:22,
    backgroundColor:'white',
    flex:1
}
})

