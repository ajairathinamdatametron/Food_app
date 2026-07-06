import React, { useState } from "react";
import OutlinedInput from "../Components/OutlinedInput";
import { useProfile } from "../Screens/ProfileScreen";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const EditProfile = ({ navigation }: any) => {

    const { profile, setProfile } = useProfile();

const [name, setName] = useState(profile.name);
const [email, setEmail] = useState(profile.email);
const [address, setAddress] = useState(profile.address);
const [password, setPassword] = useState(profile.password);

   

  return (
    <View style={styles.container}>
      <View style={styles.overlay} pointerEvents="box-none">
        
                <View style={styles.row}>
                   <TouchableOpacity
  onPress={() => navigation.goBack()}
  style={{
    position: "absolute",
    top: 25,
    left: 15,
    zIndex: 1000,
    elevation: 1000,
  }}
>
  <Image
    source={require("../assets/icons/left-arrow.png")}
    style={styles.arrow}
  />
</TouchableOpacity>
                <Image
              source={require("../assets/icons/search.png")}
              style={styles.search}
                /></View>
        <View style={styles.row}>
            
                <Image 
                  source={require("../assets/images/Hamburger.png")}
                  style={styles.bg}
                  />
                  <View style={styles.card1}><Image
                  source={require("../assets/images/profile.jpg")}
                  style={styles.profile}
                  /></View>
                  
                  <Image 
                  source={require("../assets/images/Hamburger.png")}
                  style={styles.rightbg}
                  />

        </View>
        <View style={styles.card}>
<OutlinedInput
  label="Name"
  value={name}
  onChangeText={setName}
/>

<OutlinedInput
  label="Email"
  value={email}
  onChangeText={setEmail}
/>

<OutlinedInput
  label="Delivery Address"
  value={address}
  onChangeText={setAddress}
/>

<OutlinedInput
  label="Password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
/>
  <View style={styles.line} />

  

<View style={styles.row}>
   <TouchableOpacity
  style={styles.editButton}
  onPress={() => {
    setProfile({
      name,
      email,
      address,
      password,
    });

    navigation.goBack();
  }}
>
  <Text style={styles.EditButtonText}>Save</Text>
</TouchableOpacity>
  
  


</View>

</View>

      </View>
      
    </View>
    
        
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  overlay: {
    flex: 1,
    backgroundColor: "#EF2A39",
    
   
  },
  line: {
  width: "80%",
  height: 1,
  backgroundColor: "#E8E8E8",
  top: 60,
  
},
  

  card: {
    flex:1,
    width: 385,
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 45,
    borderTopLeftRadius:45,
    marginTop:160,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },
  text:{
    marginLeft:60,
    marginTop:30,

  },bg: {
  position: "absolute",
  
  left: -90, 
  width: 196,
  height: 196,
  resizeMode: "contain",
  opacity: 0.3,
},rightbg:{
    position: "absolute",
  
  right: -90, 
  width: 196,
  height: 196,
  resizeMode: "contain",
  opacity: 0.3,
  

},

arrow:{
        width:35,
        height:35,
       
        marginLeft:15,
        shadowColor: "#f5eaea",
  shadowOpacity: 0.4,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 6,
    position: "relative", zIndex: 999,

    },
    search:{
        width:25,
        height:25,
        top:25,
        marginLeft:295,

    
  },row:{
    flexDirection: "row",
    
  
 
 
  },
 profile:{
    width:'100%',
    height:'100%',
 },card1:{
    position: "absolute",
    zIndex:10,
      width: 155,
      left: 120, 
      top:70,
  height: 150,
  borderRadius: 30,
  borderWidth: 5,
  borderColor: '#EF2A39',
  overflow: 'hidden',

},t:{
  fontSize:18,
  top:100,
  right:60,
  color:'#808080',
},rarrow:{
  width:40,
        height:40,
        top:91,
        left:70,
        shadowColor: "#f5eaea",
  shadowOpacity: 0.4,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 6,
    position: "relative", zIndex: 999,
},
editButton: {
  backgroundColor: "#EF2A39",
  width:145,
  height: 55,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
   marginTop:140,
  marginRight:10,
  flexDirection: "row",
},

EditButtonText: {
  color: "#fffffff0",
  fontSize: 18,
  
},

 


});