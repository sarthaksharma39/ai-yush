import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    console.log("Signing up with:", { name, email, password });
    // Add authentication logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      <StatusBar backgroundColor={"#3b82f6"} barStyle={"light-content"} />

      {/* Title */}
      <View className="items-center mb-8">
        <Text className="text-3xl font-extrabold text-blue-500">Sign Up</Text>
        <Text className="text-gray-500 mt-2">Create an account to continue</Text>
      </View>

      {/* Input Fields */}
      <View className="space-y-4">
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

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

        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 text-lg"
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        className="bg-blue-500 mt-6 py-3 rounded-lg items-center"
        onPress={handleSignUp}
      >
        <Text className="text-white text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In Navigation */}
      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500">Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
          <Text className="text-blue-500 font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
