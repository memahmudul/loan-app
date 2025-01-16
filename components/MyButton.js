import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PRIMARY_COLOR } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
export default function MyButton({iconName,title,onPress}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>

        <MaterialIcons
        name={iconName}
        size={35}
        color={'white'}
        
        />
      <Text style={{color:'white',fontSize:22,textTransform:'uppercase'}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 55,
    width: "100%",
    backgroundColor: PRIMARY_COLOR,
    flexDirection:'row',

    justifyContent: "center",
    borderRadius:5,
    alignItems:'center',
    gap:10,
    marginVertical:5,
  },
});
