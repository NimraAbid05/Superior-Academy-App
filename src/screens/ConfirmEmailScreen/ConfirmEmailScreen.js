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

             
<View style={styles.cnfrm}>
<CustomButton text="Confirm" onPress={onConfirmPressed} />

<CustomButton text="Resend Code" onPress={onResendCodePressed}
type="SECONDARY"/>
</View>
<View style={styles.signinconf}>
<Text style={styles.havean}>Have an account? </Text>
<CustomButton text="Sign in" onPress={onSignInPressed} type="TERTIARY"/>
</View>
</View>
</ScrollView>
    );
};

const styles=StyleSheet.create({
root:{
    alignItems:'center',
    justifyContent:'center',
    paddingTop:200,
    paddingBottom:200,
    paddingLeft:24,
    paddingRight:24,
    backgroundColor:'#EBF3FF',
},

title:{
    fontSize:24,
    color:'#04124A',
    alignSelf:'flex-start',
    marginBottom:20,
},

cnfrm:{
    width:'68%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
},

havean:{
    color:'#68768A',

},

signinconf:{
    width:'48%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
},


});
export default ConfirmEmailScreen;