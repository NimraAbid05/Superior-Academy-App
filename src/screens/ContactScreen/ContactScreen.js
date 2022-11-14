import { StyleSheet,Text,View,TouchableOpacity,TextInput, Alert} from "react-native";
import Checkbox from "expo-checkbox";
import React,{useState} from "react";
const ContactScreen = ({navigation})=>{
    
  const [name, setName] = useState("");   //hooks
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);



const submit=()=>{
  if(!name && !email && !phone && !message){
Alert.alert("Please fill all the fields");
  }
  else{
    Alert.alert('Thank you',name);
    // Alert.alert(name);
    navigation.navigate("DashBoard");
  }
};


  
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Thank you for your patience</Text>
            <Text style={styles.description}>
            Have any query? please feel free to contact us we will be right back to you.
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>
                    Enter your name </Text>
                <TextInput style={styles.inputStyle} placeholder={"Nimra"} 
                  value={name}
                  onChangeText={(userdata) => setName(userdata)} />
</View>

<View style={styles.inputContainer}>
                <Text style={styles.labels}>
                    Enter your email </Text>
                <TextInput style={styles.inputStyle} placeholder={"abc@gmail.com"} 
                value={email}
                onChangeText={(email) => setEmail(email)} />
</View>

<View style={styles.inputContainer}>
                <Text style={styles.labels}>
                    Enter your number </Text>
                <TextInput style={styles.inputStyle} placeholder={"03123456789"} 
                 value={phone}
                 onChangeText={(phone) => setPhone(phone)}
                 />
</View>

<View style={styles.inputContainer}>
                <Text style={styles.labels}>
                    How can we help you? </Text>
                <TextInput style={[styles.inputStyle,styles.multilineStyle]} placeholder={"How can we help you?"} 
              value={message}
              onChangeText={(msg) => setMessage(msg)}
                numberOfLines={5}
                multiline={true} />
</View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the Terms & Conditions
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
 </View>
    );
};

    const styles = StyleSheet.create({
        mainContainer: {
          height: "100%",
          paddingHorizontal: 30,
          backgroundColor:'#EBF3FF',
        },
        mainHeader: {
          fontSize: 24,
          color: "#04124A",
          fontWeight: "500",
          paddingTop: 40,
          paddingBottom: 15,
       
          textTransform: "capitalize",
        },
        description: {
          fontSize: 16,
          color: "#04124A",
          paddingBottom: 15,
          lineHeight: 25,
        },
      
        inputContainer: {
          marginTop: 20,
        },
        labels: {
       
          fontSize: 15,
          color: "#68768A",
          paddingBottom: 5,
          // fontFamily: "WorkSans_400Regular",
          lineHeight: 25,
        },
        inputStyle: {
          backgroundColor:'#EBF3FF',
          borderWidth: 1,
          borderColor: "white",
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 15,

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
        multiineStyle: {
          paddingVertical: 4,
        },
        buttonStyle: {
          width:130,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 18,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf:'center',
          marginVertical: 30,
          backgroundColor:'#04124A',
        },
        buttonText: {
          color: "#eee",
        },
        wrapper: {
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
        
        },
        wrapperText: {
          marginLeft: 10,
          // marginTop: 10,
          color: "#7d7d7d",
       
        },
});
export default ContactScreen;