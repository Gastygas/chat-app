import { Link } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

export function Navbar() {
  return (
    <View style={styles.navBar}>
      <Link href="/">
        <View style={styles.logoView}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/dbmfju6mu/image/upload/v1737048366/capybarabubble_whwj4p.png",
            }}
            style={{ width: 70, height: 70 }}
          ></Image>
          <Text
            style={{
              paddingTop: 14,
              fontWeight: 600,
              fontSize: 20,
              fontStyle: "italic",
            }}
          >
            AiSpeak
          </Text>
        </View>
      </Link>
      <View style={styles.aboutView}>
        <Link href="/about">
          <Pressable>
            {({ pressed }) => (
              <View style={styles.aboutView}>
                <Text
                  style={{
                    opacity: pressed ? 0.5 : 1,
                    fontWeight: 600,
                    fontSize: 20,
                    paddingTop: 15,
                    paddingRight: 6,
                  }}
                >
                  About Me
                </Text>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#017cfe",
    height: 60,
    paddingHorizontal: width * 0.05, // 5% del ancho
  },
  logoView: {
    display: "flex",
    flexDirection: "row",
  },
  aboutView: {
    display: "flex",
    flexDirection: "row",
  },
});
