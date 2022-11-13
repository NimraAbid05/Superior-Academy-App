import React,{useState} from "react";
import { View,Text,Image,StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from '../../../assets/images/Logo.png';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from '@react-navigation/native';
const SignUpScreen=()=>{
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordRepeat,setPasswordRepeat]=useState('');
    const {height}=useWindowDimensions();

    const navigation = useNavigation();

    const onSignUpPressed=()=>{
        navigation.navigate('ConfirmEmail');
    };

   
 const onSignInPressed=()=>{
    navigation.navigate('SignIn');
 };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Superior Academy</Text>

            <Image source={Logo}
             style={[styles.logo,{height: height*0.3}]}
             resizeMode="contain"/>

              <CustomInput  placeholder="Username"
               value={username} setValue={setUsername}/>

              <CustomInput  placeholder="Email"
               value={email} setValue={setEmail}/>
   
   
              <CustomInput placeholder="Password" 
              value={password} setValue={setPassword} 
              secureTextEntry={true} />


              <CustomInput placeholder="Confirm Password"
               value={passwordRepeat} setValue={setPasswordRepeat}
                secureTextEntry={true} />

<CustomButton text="Sign Up" onPress={onSignUpPressed}/>



<CustomButton text="Already have an account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>
</View>
</ScrollView>
    );
};

const styles=StyleSheet.create({
root:{
    alignItems:'center',
    padding:20,
},
logo:{
    width:'100%',
    maxWidth:400,
    maxHeight:400,
},
title:{
    fontsize:24,
    fontweight:'bold',
    color:'blue',
    margin:10,
},
});
export default SignUpScreen;