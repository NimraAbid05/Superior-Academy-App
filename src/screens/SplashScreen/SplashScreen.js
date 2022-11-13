import React from "react";
import { StyleSheet, View, Image } from "react-native";

function SplashScreen({navigation}) {
setTimeout(()=>{
navigation.replace('SignIn');
},2000);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(3,5,55,1)",
    width: 470,
    height: 435
  },
  image: {
    width: "75%",
    height: "90%",
       }
});

export default SplashScreen;
