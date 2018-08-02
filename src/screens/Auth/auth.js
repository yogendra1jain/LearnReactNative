import React,{Component} from 'react';
import{View,Text,Button,StyleSheet,ImageBackground} from 'react-native';
import StartMainTabs from '../MainTabs/startMainTab';
import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import BackgroundImage from '../../assets/backgroundimage.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';
export default class AuthScreen extends Component
{
    loginHandler = ()=>
    {
        StartMainTabs();
    }
    
    render()
    {
        return(
            
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
            <MainText>
            <HeadingText>Please Log In</HeadingText>
            </MainText>
            <ButtonWithBackground color="#29aaf4">Switch To Login</ButtonWithBackground>
            <View style={styles.inputContainer}>
            <DefaultInput style={styles.input} placeholder="Your E-mail Address"/>
            <DefaultInput  style={styles.input} placeholder="Password"/>
            <DefaultInput style={styles.input} placeholder="Confirm Password"/>
            </View>
            <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>submit</ButtonWithBackground>
           
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor:'red',
        borderWidth:1,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    backgroundImage:{
        width:'100%',
        flex:1
    },
    inputContainer:{
        width:"80%"
    },
    input:{
       borderColor:'#bbb',
       backgroundColor:'#eee'
    }
})