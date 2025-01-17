import { StyleSheet, Text, View } from "react-native";
import { Chat } from "./Chat";

export function ContainerChat(){
    return(
        <View style={styles.containerView}>
            <Text style={{textAlign:"center",fontSize:25, color:"white",fontWeight:"600"}}>Chat by Auidio below</Text>
            <Chat/>
        </View>
    )
}


const styles = StyleSheet.create({
    containerView:{
        padding:30,
        flex:1,
    }
})