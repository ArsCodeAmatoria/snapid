import React from 'react';
import { ScrollView } from 'react-native';
import { YStack, Text, Button } from 'tamagui';
import Card from '../components/Card.tsx';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <YStack padding="$4" space="$4">
        <Text fontSize="$8" fontWeight="bold" textAlign="center">
          Snapid App
        </Text>
        
        <Card title="Welcome">
          <Text>This is a React Native app with Tamagui UI framework.</Text>
        </Card>
        
        <Card title="Features">
          <YStack space="$2">
            <Text>• Native components only (no Expo or web)</Text>
            <Text>• Tamagui UI framework</Text>
            <Text>• Customizable themes</Text>
          </YStack>
        </Card>
        
        <Button theme="blue" size="$4">
          Get Started
        </Button>
      </YStack>
    </ScrollView>
  );
};

export default HomeScreen; 