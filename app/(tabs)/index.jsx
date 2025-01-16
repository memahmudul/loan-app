import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { supabase } from '../../utils/supabase'
import { useRouter } from 'expo-router'
import MyButton from '../../components/MyButton';
export default function index() {
const router = useRouter()
const onlogout = async()=>{

  const { error } = await supabase.auth.signOut()

  if(error){
    return
  }

  router.replace("/login")


}

  return (
    <View>
      <Text>index</Text>

      <MyButton title="logout" iconName="sign-out" onPress={onlogout}/>
    </View>
  )
}

const styles = StyleSheet.create({})