import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) =>{
    return(
        <View style={styles.container}>
        <TextInput value={value}
        onChangeText={setValue}
        placeholder={placeholder}
         style={styles.input} 
         secureTextEntry={secureTextEntry}/></View>
    );
    };

    const styles=StyleSheet.create({
        container:{
            backgroundColor:'#EBF3FF',
            width:'100%',
            borderColor:'#F9FBFC',
            // color: "red",
            // borderWidth:1,
            borderRadius:10,
            paddingVertical:7,
            paddingHorizontal:10,
            marginVertical:7,
            
            // shadowColor: "#B4C1D5",
            // shadowColor: "red",
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 6,
            
            elevation: 10,
            
        },
        
        input:{
            // color:'red',
        },
    });
    
    export default CustomInput;