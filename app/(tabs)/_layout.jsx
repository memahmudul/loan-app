import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, View } from 'react-native';

import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '@/constants/Colors';

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
    
        tabBarLabelStyle:{
          color:PRIMARY_COLOR,
          fontSize:16
        
        },

    
   
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            height:70,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
        headerShown:false,

        title: 'Home',
          tabBarIcon: () => <FontAwesome size={28} name="home" color={PRIMARY_COLOR} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: () => <Ionicons size={28} name="notifications" color={PRIMARY_COLOR} />,
        }}
      />

<Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <FontAwesome size={28} name="user" color={PRIMARY_COLOR} />,
        }}
      />
    </Tabs>
  );
}
