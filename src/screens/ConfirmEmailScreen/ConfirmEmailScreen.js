import React,{useState} from "react";
import { View,Text,StyleSheet,  ScrollView} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen=()=>{
    const [code,setCode]=useState('');
   
    const navigation = useNavigation();

    const onConfirmPressed=()=>{
        navigation.navigate('DashBoard');
    };
    const onResendCodePressed=()=>{
       console.warn('code sent') 
    }
    
   
 const onSignInPressed=()=>{
    navigation.navigate('SignIn');
 };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your Email</Text>

         
<CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />

             

<CustomButton text="Confirm" onPress={onConfirmPressed}/>

<CustomButton text="Resend Code" onPress={onResendCodePressed}
type="SECONDARY"/>

<CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>
</View>
</ScrollView>
    );
};

const styles=StyleSheet.create({
root:{
    alignItems:'center',
    padding:20,
},

title:{
    fontsize:24,
    fontweight:'bold',
    color:'blue',
    margin:10,
},
});
export default ConfirmEmailScreen;