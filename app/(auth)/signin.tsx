import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {Link} from "expo-router";

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in with:", email, password);
    // Add authentication logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      <StatusBar backgroundColor={"#3b82f6"} barStyle={"light-content"} />

      {/* Title */}
      <View className="items-center mb-10">
        <Text className="text-3xl font-extrabold text-blue-500">Sign In</Text>
        <Text className="text-gray-500 mt-2">Welcome back! Sign in to continue.</Text>
      </View>

      {/* Input Fields */}
      <View className="space-y-4">
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>
          <Text className="text-blue-500 text-right text-sm mt-1">Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        className="bg-blue-500 mt-6 py-3 rounded-lg items-center"
        onPress={handleSignIn}
      >
        <Text className="text-white text-lg font-bold">Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Navigation */}
      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500">Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text className="text-blue-500 font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
