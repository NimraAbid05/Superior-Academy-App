import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View,StyleSheet,Text,Image } from "react-native";
const Menu = () => {
    const navigation=useNavigation();
    return(
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("Course")}>
                    <Image style={styles.IconStyle1}
                 source={require('../../../assets/images/1.png')} />
            </TouchableOpacity>
          

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("About")}>
                 <Image style={styles.IconStyle2}
                 source={require('../../../assets/images/2.png')} />
            </TouchableOpacity>
           

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("Contact")}>
                   <Image style={styles.IconStyle3}
                 source={require('../../../assets/images/3.png')} />
            </TouchableOpacity>
          

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("UserData")}>
                <Image style={styles.IconStyle4}
                 source={require('../../../assets/images/4.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("Todo")}>
                <Image style={styles.IconStyle5}
                 source={require('../../../assets/images/5.png')} />
            </TouchableOpacity>
              
           
        </View>
    );
};
const styles=StyleSheet.create({
    menuContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        // justifyContent:'space-between',
        // marginBottom:20,
        // paddingVertical:20,
        
    },
    IconStyle1:{
        width:10,
        height:10,
        // marginTop:20,
        paddingVertical:20,
        paddingHorizontal:20,
        // aspectRatio:1,

    },
    IconStyle2:{
        width:20,
        height:20,
        // marginTop:20,
        paddingVertical:20,
        paddingHorizontal:20,
        // aspectRatio:1,

    },
    IconStyle3:{
        width:20,
        height:20,
        // marginTop:20,
        paddingVertical:20,
        paddingHorizontal:20,
        // aspectRatio:1,

    },
    IconStyle4:{
        width:20,
        height:20,
        // marginTop:20,
        paddingVertical:20,
        paddingHorizontal:20,
        // aspectRatio:1,

    },
    IconStyle5:{
        width:20,
        height:20,
        // marginTop:20,
        paddingVertical:20,
        paddingHorizontal:20,
        // aspectRatio:1,

    },
});
export default Menu;