import React from 'react';
import { View, Button } from 'react-native';


interface CategoryListProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

export default function CategoryList({ categories, onSelectCategory }: CategoryListProps) {
  return (
    <View>
      {categories.map((category, index) => (
        <Button
          key={index}
          title={category}
          onPress={() => onSelectCategory(category)}
        />
      ))}
    </View>
  );
}
