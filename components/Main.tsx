import { View } from "react-native";
import { Navbar } from "./Navbar";
import { ContainerChat } from "./ContainerChat";

export function Main() {
  return (
    <View style={{ backgroundColor: "#04458a", flex: 1 }}>
      <Navbar />
      <ContainerChat />
    </View>
  );
}
