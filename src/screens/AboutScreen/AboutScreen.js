import { StyleSheet,Text,View,Image, TouchableOpacity, Linking, ScrollView } from "react-native";
import React from "react";
 
const AboutScreen = ()=>{
    return(
        <ScrollView>
        <View style={styles.aboutContainer}>
           <Text style={styles.mainHeader} >Superior Academy</Text>
           {/* <Text style={styles.mainHeader} >Nimra Abid</Text>
           <Text style={styles.paraStyle} >A Passionate Mobile App Developer</Text>
           <Text style={styles.paraStyle2} >From Karachi, Pakistan</Text> */}
           <View>
            <Text style={styles.paraStyle}>Superior Academy is the most prestigious computer education online institute that supports the educational and career progression needs of more than thousands students every year. The Institute aspires to be a center of excellence in Computer Sciences and technologies, and acts as an effective agent of change and a model for others to emulate. The institute has been catering to the needs of aspiring and experienced IT Professionals. We offer a wide range of short-term and long-term customized Training Courses suitable for small, medium and large-sized organizations. The courses start from basic Computer literacy to advanced levels.
            </Text>
            <Text style={styles.headings}>Our Vision</Text>
            <Text style={styles.paraStyle}>
            With its focus on student’s success, “Superior Academy” prides itself on its high quality offered programs, offering a variety of courses preparing students for advanced studies and challenging positions in the government and business industry. The Institute aspires for the leadership role in pursuit of excellence in courses.

            Our Mission
            Superior Academy believes that Information Technology has a part to play for people from all lifestyles. Our mission is to make technology an asset and provide cutting-edge IT knowledge. We want to remain a reliable name in computer education by anticipating and satisfying the ever-growing demands of the IT industry.
            </Text>
            <Text style={styles.headings}>Our Mission</Text>
            <Text style={styles.paraStyle}>
            Superior Academy believes that Information Technology has a part to play for people from all lifestyles. Our mission is to make technology an asset and provide cutting-edge IT knowledge. We want to remain a reliable name in computer education by anticipating and satisfying the ever-growing demands of the IT industry.
            </Text>


           </View>

           <View style={styles.aboutLayout}>
            {/* <Text style={styles.aboutSubHeader}>content</Text> */}
           </View>
           <Text style={styles.mainHeader2}>Follow us on Social Networks</Text>

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
</ScrollView>
    );
};
const styles=StyleSheet.create({
    aboutContainer:{
        paddingBottom:32,
        display:"flex",
        alignItems:"center",
        backgroundColor:'#EBF3FF',
      //   height:'100%',
    },
   
 mainHeader:{
    fontSize:35,
    color:"#04124A",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:40,
    marginBottom:10,
    // lineHeight:30,
 },
 mainHeader2:{
    fontSize:15,
    color:"#04124A",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:50,
    marginBottom:20,
 },
 paraStyle:{
    color:"#68768A",
    alignItems:'center',
    width:'auto',
    lineHeight: 20,
    paddingLeft:26,
    paddingRight:24,
    paddingBottom:12,
    textAlign:'justify',
 },
 headings:{
    color:'#04124A',
    fontSize:20,
    paddingLeft:14,
    paddingBottom:8,
    fontWeight:"bold",
 },

//  aboutLayout:{
//     paddingHorizontal:30,
//     marginVertical:30,
//  },
//  aboutSubHeader:{
//     fontSize:18,
//     color:"#fff",
//     textTransform:"capitalize",
//     fontWeight:"500",
//     marginVertical:15,
//     lineHeight:30,
//     alignSelf:"center",


//  },
 menuContainer:{
width:"100%",
flexDirection:"row",
justifyContent:"space-evenly",
 },

 iconStyle:{
    width:"100%",
   height:40,
   aspectRatio:1,
    // paddingBottom:50,
 },

});
export default AboutScreen;
