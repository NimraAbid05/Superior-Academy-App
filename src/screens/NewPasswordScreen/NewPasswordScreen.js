import React,{useState} from "react";
import { View,Text,StyleSheet,  ScrollView} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen=()=>{
    const [code,setCode]=useState('');
    const [newPassword,setNewPassword]=useState('');
    
    const navigation = useNavigation();
    const onSubmitPressed=()=>{
        console.warn('Password Updated');
        navigation.navigate('SignIn');
    };
   

   
 const onSignInPressed=()=>{
    navigation.navigate('SignIn');
 };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>

         
<CustomInput placeholder="Code" value={code} setValue={setCode} />
<CustomInput placeholder="New Password" value={newPassword} setValue={setNewPassword} 
secureTextEntry={true} />

             

<CustomButton text="Submit" onPress={onSubmitPressed}/>



<CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY"/>
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
export default NewPasswordScreen;