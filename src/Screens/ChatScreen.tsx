import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";

const ChatScreen = ({ navigation }: any) => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! How can we help you?",
      sender: "support",
    },
    {
      id: "2",
      text: "I want to know my order status.",
      sender: "user",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        text: message,
        sender: "user",
      },
    ]);

    setMessage("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
       <TouchableOpacity
  onPress={() => {
    navigation.navigate("Home");
  }}
>
  <Image
    source={require("../assets/icons/left-arrow.png")}
    style={styles.icon}
  />
</TouchableOpacity>

        <Text style={styles.headerTitle}>Support Chat</Text>

        <Image
          source={require("../assets/images/profile.jpg")}
          style={styles.profile}
        />
      </View>

      {/* Messages */}
            {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageRow,
              item.sender === "user"
                ? styles.userRow
                : styles.supportRow,
            ]}
          >
            {item.sender === "support" && (
              <Image
                source={require("../assets/icons/user-profile.png")}
                style={styles.profileImage}
              />
            )}

            <View
              style={[
                styles.messageBubble,
                item.sender === "user"
                  ? styles.userBubble
                  : styles.supportBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  item.sender === "user" && { color: "#fff" },
                ]}
              >
                {item.text}
              </Text>
            </View>

            {item.sender === "user" && (
              <Image
                source={require("../assets/images/profile.jpg")}
                style={styles.profileImage}
              />
            )}
          </View>
        )}
      />

      {/* Type Message */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
          style={styles.input}
          placeholderTextColor="#888"
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Image
            source={require("../assets/icons/send.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  borderTopWidth: 1,
  borderColor: "#E5E5E5",
  backgroundColor: "#FFF",
},

input: {
  flex: 1,
  height: 48,
  backgroundColor: "#F5F5F5",
  borderRadius: 24,
  paddingHorizontal: 18,
  fontSize: 16,
},

sendButton: {
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: "#EF2A39",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 10,
},

sendIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},
  messageRow: {
  flexDirection: "row",
  alignItems: "flex-end",
  marginVertical: 8,
},

userRow: {
  justifyContent: "flex-end",
},

supportRow: {
  justifyContent: "flex-start",
},

profileImage: {
  width: 38,
  height: 38,
  borderRadius: 19,
  marginHorizontal: 8,
},

messageBubble: {
  maxWidth: "70%",
  padding: 12,
  borderRadius: 18,
},

userBubble: {
  backgroundColor: "#EF2A39",
  borderBottomRightRadius: 5,
},

supportBubble: {
  backgroundColor: "#F2F2F2",
  borderBottomLeftRadius: 5,
},

messageText: {
  fontSize: 15,
  color: "#000",
},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 15,
  },

  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },

  profile: {
    width: 35,
    height: 35,
    borderRadius: 18,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  message: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 15,
    marginVertical: 6,
  },

  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#EF2A39",
  },

  supportMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#F2F2F2",
  },

  

  sendText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});