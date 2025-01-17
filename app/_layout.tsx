import { ScrollView, View } from "react-native";
import { Slot } from "expo-router";
export default function Layout() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </ScrollView>
  );
}
