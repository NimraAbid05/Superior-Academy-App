import React,{useState} from "react";
import { View,Text,StyleSheet,  ScrollView} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen=()=>{
    const [username,setUsername]=useState('');
   
    const navigation = useNavigation();

    const onSendPressed=()=>{
        navigation.navigate('NewPassword');
    };
   

   
 const onSignInPressed=()=>{
  navigation.navigate('SignIn');
 };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>

         
<CustomInput placeholder="Enter your username" value={username} setValue={setUsername} />

             
<View style={styles.frgt}>
<CustomButton text="Send" onPress={onSendPressed}/>



<CustomButton text="Cancel" onPress={onSignInPressed} type="TERTIARY3"/>
</View>
</View>
</ScrollView>
    );
};

const styles=StyleSheet.create({
root:{
    alignItems:'center',
    justifyContent:'center',
    // marginTop:'50',
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

frgt:{
    width:'50%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
},

});
export default ForgotPasswordScreen;