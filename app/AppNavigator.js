import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-lg font-bold text-blue-500">Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text className="text-lg font-bold text-white">Settings</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
