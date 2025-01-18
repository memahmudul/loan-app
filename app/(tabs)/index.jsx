import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { supabase } from "../../utils/supabase";
import { useRouter } from "expo-router";
import MyButton from "../../components/MyButton";
import { ScaledSheet } from "react-native-size-matters";
import { PRIMARY_COLOR } from "@/constants/Colors";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
export default function index() {








  const { userData } = useSelector((state) => state.auth);
  const router = useRouter();
  const onlogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return;
    }

    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            height: 88,
            width: 85,

            borderRadius: 50,
            borderWidth: 2,
            borderColor: "white",
            backgroundColor: "grey",
          }}
        >
          {/* <Image
              style={{
                height: "100%",
                width: "100%",
                resizeMode: "cover",
                borderRadius: 5,
              }}
              source={{ uri: userData?.photo }}
            /> */}
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.nameStyle}>{userData.name}</Text>
          <Text style={styles.addressStyle}>Dhaka, Bangladesh</Text>
        </View>

        <TouchableOpacity onPress={onlogout} style={{position:'absolute',right:15,top:15}}>
          <MaterialIcons name="logout" size={30} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}} style={{position:'absolute',left:15,top:15}}>
          <FontAwesome name="user-circle" size={30} color={"white"} />
        </TouchableOpacity>
      </View>

     <View style={styles.loanCardWrapper}>
     <View style={styles.loanCard}>

<View style={{position:'absolute',top:'40%',left:15,flexDirection:'row',alignItems:'center',gap:10}}>
<Image
  source={require('../../assets/images/sim.png')}
  style={{width: 50, height: 50,resizeMode:'contain',}}
/>

<Text style={{fontSize:24,fontWeight:'medium',color:'white'}}>4521 4838 9321 7825</Text>

</View>


<View style={{position:'absolute',bottom:10,left:10}}>
  <Text style={{fontSize:14,color:'white'}}>10/12</Text>
<Text style={{fontSize:16,color:'white'}}>Expiry Date</Text>

</View>


<View style={{position:'absolute',bottom:10,right:10}}>
  <Text style={{fontSize:14,color:'white',textTransform:'uppercase'}}>{userData.name}</Text>
<Text style={{fontSize:16,color:'white'}}>Dhaka, Bangladesh</Text>

</View>

 

      </View>


      <View style={{flexDirection:'row',gap:30,alignItems:'center',justifyContent:'center',marginVertical:20}}>
        <TouchableOpacity style={{alignItems:'center',gap:5,backgroundColor:PRIMARY_COLOR,padding:5,borderRadius:10,}}>

          <FontAwesome6
          name="user"
          color={'white'}
          size={30}
          />

          <Text style={{fontSize:18,color:'white'}}>Profile</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center',gap:5,backgroundColor:PRIMARY_COLOR,padding:5,borderRadius:10,}}>

<FontAwesome6
name="user"
color={'white'}
size={30}
/>

<Text style={{fontSize:18,color:'white'}}>Profile</Text>

</TouchableOpacity>



<TouchableOpacity style={{alignItems:'center',gap:5,backgroundColor:PRIMARY_COLOR,padding:5,borderRadius:10,}}>

<FontAwesome6
name="user"
color={'white'}
size={30}
/>

<Text style={{fontSize:18,color:'white'}}>Profile</Text>

</TouchableOpacity>


      </View>


     </View>

     
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: "18@vs",
  },

  header: {
    height: "150@vs",

    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
 
    alignItems: "center",
    padding: 10,
    gap: 5,
    elevation: 5,
    position:'relative'
  },
  nameStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign:'center'

  },
  addressStyle: {
    fontSize: 16,
    color: "white",
    textAlign:'center'
  },

  loanCardWrapper:{
    backgroundColor:'white',
    paddingHorizontal:15,
    margin:10,
    borderRadius:10

  },

  loanCard: {
    height: "160@vs",

    margin: 15,
    elevation: 5,
padding:10,
    backgroundColor: PRIMARY_COLOR,
   borderRadius:10,
   elevation:5

 
  },
});
