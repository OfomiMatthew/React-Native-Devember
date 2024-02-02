
import { View, Text, StyleSheet } from "react-native";

const DayListItem = (props: { day: number }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.day}</Text>
    </View>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    // width: 100,
    // height: 100,
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9b4521",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },

  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily:"Inter"
  },
});
