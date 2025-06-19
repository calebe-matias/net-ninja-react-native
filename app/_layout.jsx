import { Stack } from 'expo-router';
import { StyleSheet, View, Text, useColorScheme} from 'react-native';
import { Colors } from './constants/colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  console.log('Color Scheme:', colorScheme);
  return (
    <>
      <StatusBar value='auto' />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.navBackground,
      }}>
          <Stack.Screen name='index' options={{ title: 'Home' }} />
          <Stack.Screen name='about' options={{ title: 'About' }} />
          <Stack.Screen name='contact' options={{ title: 'Contact', headerShown: false }} />
      </Stack>
    </>
  );
}

export default RootLayout;