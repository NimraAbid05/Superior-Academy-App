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

         
{/* <CustomInput placeholder="Code" value={code} setValue={setCode} /> */}
<CustomInput placeholder="New Password" value={code} setValue={setCode} />
<CustomInput placeholder="Confirm Password" value={newPassword} setValue={setNewPassword} 
secureTextEntry={true} />

             
<View style={styles.sbmt}>
<CustomButton text="Submit" onPress={onSubmitPressed}/>

<CustomButton text="Cancel" onPress={onSignInPressed} type="TERTIARY4"/>
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

sbmt:{
    width:'55%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
},
});
export default NewPasswordScreen;