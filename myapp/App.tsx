import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {AmaticSC_700Bold,AmaticSC_400Regular} from "@expo-google-fonts/amatic-sc"
import DayListItem from "./src/components/core/DayListItem";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";

SplashScreen.preventAutoHideAsync();

const days = Array.from({ length: 24 }, (v, i) => i + 1);

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic:AmaticSC_400Regular,
    AmaticBold:AmaticSC_700Bold
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        // horizontal
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    gap: 10,
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },
});
