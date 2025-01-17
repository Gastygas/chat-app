import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MicrophoneIcon } from "./Icons";

export function Messages({
  messages,
}: {
  messages: { text: string; id: number; timer: number }[];
}) {
  return (
    <ScrollView>
      <View style={styles.messagesView}>
        {messages.map((men: { text: string; id: number; timer: number }) => (
          <View key={men.id} style={{ display: "flex", flexDirection: "row" }}>
            {men.text ? (
              <Text style={styles.text}>{men.text}</Text>
            ) : (
              <Text style={styles.textAudio}>
                {" "}
                <MicrophoneIcon size={15} style={{ marginRight: 5 }} />
                {men.timer}s voice message sent!
              </Text>
            )}
            <Image
              source={{
                uri: "https://res.cloudinary.com/dbmfju6mu/image/upload/v1737048366/capybarabubble_whwj4p.png",
              }}
              style={{ width: 70, height: 70 }}
            ></Image>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messagesView: {
    display: "flex",
    alignItems: "flex-end",
    padding: 25,
    maxHeight: 300,
  },
  text: {
    backgroundColor: "yellow",
    marginBottom: 25,
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    maxWidth: "80%",
  },
  textAudio: {
    backgroundColor: "yellow",
    marginBottom: 25,
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    maxWidth: "80%",
  },
});
