import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {ScrollView, View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const navigation= useNavigation();

  // useEffect(()=>{
  //   navigation.replace("auth");
  // },[]);

  return (
    <SafeAreaView className="min-h-screen">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center text-center h-full px-4">
          <Text className="text-3xl font-extrabold text-blue-500">
            Ai Yush
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={'#3b82f6'} barStyle={'light'}/>
    </SafeAreaView>
  );
}
