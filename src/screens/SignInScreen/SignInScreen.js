import React,{useEffect, useState} from "react";
import { View,Text,Image,StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from '../../../assets/images/Logo.png';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from '@react-navigation/native';
import { auth } from "../../../firebase";

const SignInScreen=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {height}=useWindowDimensions();
    
    // const handleSignUp=()=>{
    //     auth
    //     .createUserWithEmailAndPassword(email,password)
    //     .then(userCredentials=>{
    //         const user=userCredentials.user;
    //         console.log('Registered with:',user.email);
    //     })
    //     .catch(error=>alert(error.messsage))
    // }

    // const handleLogin=()=>{
    //     auth
    //     .signInWithEmailAndPassword(email,password)
    //     .then(userCredentials=>{
    //         const user=userCredentials.user;
    //         console.log('Logged in with:',user.email);
    //     })
    //     .catch(error=>alert(error.messsage))
    // }
    

    const navigation=useNavigation();

    

    // useEffect(()=>{
    //    auth.onAuthStateChanged(user =>{
    //     if (user){

        
    //     navigation.navigate('DashBoard');
    //     }
    // })
    // },[])


    const onForgotPasswordPressed=()=>{
      
        navigation.navigate('ForgotPassword');
    };
 const onSignUpPressed=()=>{
    
    navigation.navigate('SignUp');
 };

 const onSignInPressed=()=>{
    
    navigation.navigate('DashBoard');
 };
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.superior}>Superior Academy</Text>
            <Image source={Logo}
             style={[styles.logo,{height: height*0.3}]}
             resizeMode="contain"/>
             {/* <View style={styles.backBox}> */}
              <CustomInput  placeholder="Username" value={username} setValue={setUsername}/>
              <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
<CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
<CustomButton text="Sign In" onPress={onSignInPressed}/>

{/* <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"/> */}
<View style={styles.signup}>
<Text style={styles.dontHave}>Don't have an account?</Text>
<CustomButton text="Sign Up" onPress={onSignUpPressed} type="TERTIARY2"/>
{/* <CustomButton text="Don't have an account? SignUp" onPress={onSignUpPressed} type="TERTIARY"/> */}
{/* </View> */}
</View>
</View>
</ScrollView>
    );
};

const styles=StyleSheet.create({
root:{
    margin:0,
    alignItems:'center',
    paddingTop:38,
    paddingBottom:38,
    paddingLeft:24,
    paddingRight:24,
    backgroundColor:'#EBF3FF',
},
logo:{
    width:'100%',
    maxWidth:400,
    maxHeight:400,
},

superior:{
    fontSize:36,
    color:'#04124A',
},

// backBox:{
//     backgroundColor:'red',
//     // maxWidth:'100',
// },

dontHave:{
    color:'#68768A',

},

signup:{
    width:'58%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
},

});
export default SignInScreen;