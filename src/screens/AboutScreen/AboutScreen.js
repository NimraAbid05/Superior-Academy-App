import { StyleSheet,Text,View,Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
const AboutScreen = ()=>{
    return(
        <View style={styles.aboutContainer}>
           <Text style={styles.mainHeader} >Miss Nimra</Text>
           <Text style={styles.paraStyle} >I am a Mobile App Developer</Text>
           <View>
            <Image style={styles.imgStyle}
            source={require('../../../assets/images/Logo.png')} />
           </View>

           <View style={styles.aboutLayout}>
            <Text style={styles.aboutSubHeader}>content</Text>
           </View>
           <Text style={styles.mainHeader}>Follow us on Social Networks</Text>

           <View style={styles.menuContainer}>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL("https://www.youtube.com/c/SuperiorAcademy05/")}>
                <Image style={styles.iconStyle}
                source={require('../../../assets/images/youtube.png')}/>
     </TouchableOpacity>

     <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL("info.superioredu@gmail.com")}>
                <Image style={styles.iconStyle}
                source={require('../../../assets/images/gm3.png')} />
     </TouchableOpacity>

     <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL("https://www.instagram.com/superior_academy05/")}>
                <Image style={styles.iconStyle}
               source={require('../../../assets/images/insta.png')} />
     </TouchableOpacity>
           </View>
        </View>
    );
};
const styles=StyleSheet.create({
    aboutContainer:{
        display:"flex",
        alignItems:"center"
    },
    imgStyle:{
        width:150,
        height:150,
        borderRadius:100,

    },
 mainHeader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:10,
    lineHeight:30,
 },
 paraStyle:{
    fontSize:18,
    color:"#7d7d7d",
    paddingBottom:30,
 },
 aboutLayout:{
    paddingHorizontal:30,
    marginVertical:30,
 },
 aboutSubHeader:{
    fontSize:18,
    color:"#fff",
    textTransform:"capitalize",
    fontWeight:"500",
    marginVertical:15,
    lineHeight:30,
    alignSelf:"center",


 },
 menuContainer:{
width:"100%",
flexDirection:"row",
justifyContent:"space-evenly",
 },
 iconStyle:{
    width:"100%",
   height:40,
   aspectRatio:1

 }
});
export default AboutScreen;