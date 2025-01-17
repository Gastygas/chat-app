import { StyleSheet, Text, View } from "react-native";
import { InputChat } from "./InputChat";
import { Messages } from "./Messages";
import { useState } from "react";

let timerId: NodeJS.Timeout;
export function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<
    { text: string; id: number; timer: number }[]
  >([]);
  const [startVoice, setStartVoice] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (text) {
      let newId = messages.length + 1;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text, id: newId, timer: 0 },
      ]);
      setText("");
    }
  };
  const handleSendAudio = () => {
    if (startVoice) {
      let newId = messages.length + 1;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "", id: newId, timer: startVoice },
      ]);
      setStartVoice(0);
    }
  };

  const handleStartTimer = () => {
    setIsRecording(true);
    setStartVoice(0);
    timerId = setInterval(() => {
      setStartVoice((prev) => prev + 1);
    }, 1000);
  };

  const handleStopTimer = () => {
    setIsRecording(false);
    handleSendAudio()
    clearInterval(timerId);
    setStartVoice(0); 
  };

  return (
    <View style={styles.chatView}>
      <View>
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          Chat is below
        </Text>
      </View>
      <Messages messages={messages} />
      <View>
        <InputChat
          text={text}
          setText={setText}
          onSend={handleSend}
          startTimer={handleStartTimer}
          stopTimer={handleStopTimer}
          timer={startVoice}
          placeholderInput={isRecording ? "Recording..." : "Chat here..."}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatView: {
    padding: 15,
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    opacity: 0.9,
    width: "90%",
    maxWidth: 650,
    minHeight: 500,
    borderRadius: 14,
    display: "flex",
    justifyContent: "space-between",
  },
});
