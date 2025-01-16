import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import {
    PRIMARY_COLOR
    } from "@/constants/Colors";
import { supabase } from '../utils/supabase'
export default function index() {




    const router = useRouter()

// useEffect(() => {



  
//  setTimeout(()=>{

//     router.replace("/login");
  

//  },3000)
// }, [])

const [session, setSession] = useState(null)
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session)
    if(session){
      router.replace('/(tabs)')
    }else{
      router.replace('/login')
    }
  })

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
  })
}, [])

  return (
   <SafeAreaView style={styles.container}>

     <View
              style={{
          height:200,
                width: 300,
                marginBottom:10
    
               
              }}
            >
              
            </View>

    <Text style={{fontSize:20,fontFamily:'BanglaSemiBold',color:PRIMARY_COLOR}}>বেট, ডিপোজিট, উইথড্র</Text>

   </SafeAreaView>
  )
}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    }

})