import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </SafeAreaView>
    </TamaguiProvider>
  );
};

export default App; 