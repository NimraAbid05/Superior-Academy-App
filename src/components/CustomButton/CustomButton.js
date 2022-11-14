import React from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native'
const CustomButton=({onPress,text,type="PRIMARY"})=>{
    return(
        <Pressable onPress={onPress} style={[styles.container,styles[`container_${type}`]]}>
        
            <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
            </Pressable>
    );
};

const styles=StyleSheet.create({
    container:{
        
    },
    container_PRIMARY:{
        backgroundColor:'#04124A',
        paddingHorizontal:20,
        paddingVertical:15,
        marginVertical:20,
        alignItems:'center',
        borderRadius:10,

    },
    
    container_SECONDARY:{
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:15,
        marginVertical:20,
        alignItems:'center',
        borderRadius:10,
    },
    container_TERTIARY:{
        // marginVertical:7,
        alignSelf:'flex-end',
    },
        container_TERTIARY2:{
        // marginVertical:7,
        // alignSelf:'flex-end',
    },
        container_TERTIARY3:{
            // backgroundColor:'#EDEEF0',
            backgroundColor:'white',
            paddingHorizontal:20,
            paddingVertical:15,
            marginVertical:20,
            alignItems:'center',
            borderRadius:10,

    },
        container_TERTIARY4:{
            // backgroundColor:'#EDEEF0',
            backgroundColor:'white',
            paddingHorizontal:20,
            paddingVertical:15,
            marginVertical:20,
            alignItems:'center',
            borderRadius:10,

    },
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_TERTIARY:{
        color:'#04124A',
        display:'flex',
    },
    text_TERTIARY2:{
        color:'#04124A',
        display:'flex',
    },
    text_TERTIARY3:{
        color:'#04124A',
        display:'flex',
    },
    text_TERTIARY4:{
        color:'#04124A',
        display:'flex',
    },
    text_SECONDARY:{
        color:'#04124A',
        display:'flex',
        
    },
    
});
export default CustomButton;