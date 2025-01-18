import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, ToastAndroid, View } from "react-native";

import { PRIMARY_COLOR, INPUT_BG } from "@/constants/Colors";
import MyButton from "../../components/MyButton";
import { supabase } from "../../utils/supabase";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { authenticate } from "../redux/features/AuthSlice";
export default function index() {
  const dispatch = useDispatch();
  const router = useRouter();


  const [name, setname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })




    if (error) {
      ToastAndroid.show(error.message,ToastAndroid.LONG)
    } else {
      ToastAndroid.show('Login Successfull',ToastAndroid.LONG)
      router.replace("/(tabs)");
 
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      name,
      email,
      password,
    });

    if (error) {
      ToastAndroid.show(error.message,ToastAndroid.LONG)
    } else {
      const params = { name,email, password };

      const { data, error } = await supabase
        .from("user")
        .insert([params])
        .select();

      if (!error) {

        dispatch(authenticate(params))
       ToastAndroid.show("User Created Successfully",ToastAndroid.LONG)
       router.replace("/(tabs)");
      }else{
        ToastAndroid.show(error.message,ToastAndroid.LONG)
      }
    }

    setLoading(false);
  }

  return (
    <View style={styles.container}>

<View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setname}
          placeholder="Enter Your Name"
          placeholderTextColor={PRIMARY_COLOR}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Your Email"
          placeholderTextColor={PRIMARY_COLOR}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Your Password"
          placeholderTextColor={PRIMARY_COLOR}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <MyButton title="LOGIN" iconName="login" onPress={signInWithEmail} />
      </View>
      <View style={styles.verticallySpaced}>
        <MyButton title="SIGN UP" iconName="login" onPress={signUpWithEmail} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    width: "full",
    backgroundColor: INPUT_BG,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: "PoppinsRegular",
  },
});
