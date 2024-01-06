import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ParametersScreen({ navigation }) {
  const changeLanguage = (language) => {
    console.log(`Langue changée en ${language}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.itemContainer} onPress={() => console.log("Notification pressed")}>
        <Icon name="bell" size={30} color="black" />
        <Text style={styles.text}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={() => console.log("Confidentialité et Sécurité pressed")}>
        <Icon name="lock" size={30} color="black" /> {/* Remplacez 'lock' par le nom du logo approprié */}
        <Text style={styles.text}>Confidentialité et Sécurité</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});
