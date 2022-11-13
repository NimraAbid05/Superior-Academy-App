import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View,StyleSheet,Text,Image } from "react-native";
const Menu = () => {
    const navigation=useNavigation();
    return(
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("Course")}>
                    <Image style={styles.IconStyle}
                 source={require('../../../assets/images/course.png')} />
            </TouchableOpacity>
          

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("About")}>
                 <Image style={styles.IconStyle}
                 source={require('../../../assets/images/about.png')} />
            </TouchableOpacity>
           

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("Contact")}>
                   <Image style={styles.IconStyle}
                 source={require('../../../assets/images/contact.png')} />
            </TouchableOpacity>
          

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("UserData")}>
                <Image style={styles.IconStyle}
                 source={require('../../../assets/images/student.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=>navigation.navigate("Todo")}>
                <Image style={styles.IconStyle}
                 source={require('../../../assets/images/Todo.png')} />
            </TouchableOpacity>
              
           
        </View>
    );
};
const styles=StyleSheet.create({
    menuContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:20,
        
    },
    IconStyle:{
        width:"100%",
        height:50,
        aspectRatio:1,

    }
});
export default Menu;