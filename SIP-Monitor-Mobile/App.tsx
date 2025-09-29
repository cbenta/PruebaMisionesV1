import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/login';
import MissionsListScreen from './app/missions/list';
import MissionDetailScreen from './app/missions/detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Missions" component={MissionsListScreen} />
        <Stack.Screen name="MissionDetail" component={MissionDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
