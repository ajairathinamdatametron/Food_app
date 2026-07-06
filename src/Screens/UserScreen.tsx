import React from "react";
import { useProfile } from "../Screens/ProfileScreen";
import OutlinedInput from "../Components/OutlinedInput";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";


const User = ({ navigation}: any) => {
  const { profile } = useProfile();


  return (
    <View style={styles.container}>
      <View style={styles.overlay} pointerEvents="box-none">
        
                <View style={styles.row}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
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
        </View>
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
  value={profile.name}
  editable={false}
/>

<OutlinedInput
  label="Email"
  value={profile.email}
  editable={false}
/>

<OutlinedInput
  label="Delivery Address"
  value={profile.address}
  editable={false}
/>

<OutlinedInput
  label="Password"
  value={profile.password}
  editable={false}
  secureTextEntry
/>
  <View style={styles.line} />

  
<View style={styles.row}>
  <TouchableOpacity onPress={() => navigation.navigate("PaymentDetails")}>
    <Text style={styles.t}>Payment Details</Text>
    </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("PaymentDetails")}>
            <Image
                   source={require("../assets/icons/right-arrow.png")}
                  style={styles.rarrow}
                  />
        </TouchableOpacity>
        

</View>
<View style={styles.row}>
  <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")}>
    <Text style={styles.t}>Order History      </Text>
    </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("OrderHistory")}>
            <Image
                   source={require("../assets/icons/right-arrow.png")}
                  style={styles.rarrow}
                  />
        </TouchableOpacity>
        

</View>
<View style={styles.row}>
   <TouchableOpacity
    style={styles.editButton}
    onPress={() => navigation.navigate("EditProfile")}
  >
    <Text style={styles.EditButtonText}>Edit Profile</Text>
    <Image
    source={require("../assets/icons/edit-profile.png")}
    style={styles.editIcon}/>

  </TouchableOpacity>
  <TouchableOpacity
    style={styles.logoutButton}
    onPress={() => navigation.goBack()}
  >
    <Text style={styles.logoutText}>Log out</Text>
    <Image
    source={require("../assets/icons/logout.png")}
    style={styles.logoutIcon}/>
  </TouchableOpacity>
  


</View>

</View>

      </View>
      
    </View>
    
        
  );
};

export default User;

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
    tintColor: "#ffffff",

    },
    search:{
        width:25,
        height:25,
        top:25,
        marginLeft:295,
        tintColor: "#ffffff",

    
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
  width:18,
        height:30,
        top:94,
        left:70,
        tintColor: "#000000",
        shadowColor: "#f5eaea",
  shadowOpacity: 0.4,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 6,
    position: "relative", zIndex: 999,
    marginBottom: 10,
},
editButton: {
  backgroundColor: "#3C2F2F",
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
logoutButton: {
  backgroundColor: "#ffffff",
   width:145,
  height: 55,
  borderColor:'#EF2A39',
  borderWidth:3,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
   marginTop:140,
    flexDirection: "row",
  
},

logoutIcon: {
  width: 20,
  height: 20,
  left:8,
  marginRight: 8,
  tintColor: "#EF2A39",
},
editIcon: {
  width: 25,
  height: 25,
  left:8,
  marginRight: 8,
  tintColor: "#ffffff",
},


logoutText: {
  color: "#EF2A39",
  fontSize: 18,
  
},

 


});