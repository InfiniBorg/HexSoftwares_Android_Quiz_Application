import React from 'react';
import { View, Text, Button } from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const categories = ['History', 'Science', 'Sports', 'Music'];

  const handleCategorySelect = (category: string) => {
    navigation.navigate('Quiz', { category });
  };

  return (
    <View>
      <Text>Select a Category</Text>
      {categories.map((category, index) => (
        <Button
          key={index}
          title={category}
          onPress={() => handleCategorySelect(category)}
        />
      ))}
    </View>
  );
}
