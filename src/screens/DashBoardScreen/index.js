import React from "react"
import {View,Text,StyleSheet} from 'react-native';
import Menu from "../../components/Menu/Menu";

function DashBoardScreen(){
    const description= "lorem ipsum";
    return(
        <View style={styles.mainContainer}>
          
            <Text style={styles.mainHeader}>Welcome to </Text>
            <Text  style={[styles.mainHeader,{fontSize:30,color:"#4c5dab",textAlign:"center",justifyContent:'center'}]}>
                Superior Academy</Text>
<Text style={styles.paraStyle}>{description}</Text>

<View>
    <View style={styles.linestyle}></View>
    <Menu /> 
    <View style={styles.linestyle}></View> 
</View>
        </View>

    );
}
const styles=StyleSheet.create({
    mainContainer:{
        height:'100%',
        display:"flex",
        justifyContent:"space-between",
        paddingHorizontal:20,
        backgroundColor:"#fff",
        textAlign:"center",
    },
   
    mainHeader:{
        fontSize:20,
        color:"black",
        textTransform:"uppercase",
        marginTop:20,
        padding:50,
        textAlign:"center"

    },
    paraStyle:{
        textAlign:"left",
        fontSize:20,
        color:"#7d7d7d",
        marginTop:30,
        paddingBottom:50,
        lineHeight:26,
        textAlign:"center",
        
    },
    linestyle:{
        marginBottom:20,
        borderWidth:0.5,
        borderColor:"grey",
        


    }
});

 export default DashBoardScreen;