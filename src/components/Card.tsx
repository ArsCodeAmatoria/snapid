import React from 'react';
import { YStack, Text, Stack } from 'tamagui';

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <YStack
      backgroundColor="$background"
      borderRadius="$4"
      padding="$4"
      marginVertical="$2"
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={10}
      elevation={2}
    >
      {title && (
        <Text fontWeight="bold" fontSize="$5" marginBottom="$2">
          {title}
        </Text>
      )}
      <Stack>{children}</Stack>
    </YStack>
  );
};

export default Card; 