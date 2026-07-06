import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Failure = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.card}>

     
          <View style={styles.iconCircle}>
            <Text style={styles.tick}>✗</Text>
          </View>

          <Text style={styles.title}>Failure !</Text>

       
          <Text style={styles.message}>
            Your payment failed.
          </Text>
          <Text style={styles.message}>
            A receipt for this purchase has
          </Text>
          <Text style={styles.message}>
            been sent to your email.
          </Text>

      
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default Failure;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingVertical: 35,
    paddingHorizontal: 25,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EF2A39",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  tick: {
    color: "#FFFFFF",
    fontSize: 45,
    fontWeight: "bold",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#EF2A39",
    marginBottom: 20,
  },

  message: {
    fontSize: 16,
    color: "#8B8B8B",
    textAlign: "center",
    lineHeight: 24,
  },

  button: {
    width: 180,
    height: 55,
    backgroundColor: "#EF2A39",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});