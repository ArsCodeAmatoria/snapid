import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import HomeScreen from './src/screens/HomeScreen.tsx';

const App: React.FC = () => {
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