import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { MicrophoneIcon, SendIcon } from "./Icons";

export function InputChat({
  text,
  setText,
  onSend,
  startTimer,
  stopTimer,
  timer,
  placeholderInput,
}: {
  text: string;
  timer: number;
  placeholderInput: string;
  setText: (text: string) => void;
  onSend: () => void;
  startTimer: () => void;
  stopTimer: () => void;
}) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={placeholderInput ? placeholderInput : "Chatea aqui..."}
        placeholderTextColor="#aaa"
      />
      {text === "" ? (
        <Pressable onPressIn={startTimer} onPressOut={stopTimer}>
          {({ pressed }) => (
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 20, position: "absolute", marginRight: 50 }}
              >
                {pressed ? `00:${timer}` : ""}
              </Text>
              <MicrophoneIcon
                style={{
                  marginLeft: 50,
                  marginRight: 25,
                  opacity: pressed ? 0.7 : 1,
                }}
              />
            </View>
          )}
        </Pressable>
      ) : (
        <Pressable onPress={onSend}>
          {({ pressed }) => (
            <SendIcon style={{ marginLeft: 40, opacity: pressed ? 0.7 : 1 }} />
          )}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    height: 35,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});
