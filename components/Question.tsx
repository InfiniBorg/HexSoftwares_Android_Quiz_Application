import React from 'react';
import { View, Text, Button } from 'react-native';

interface QuestionProps {
  question: string;
  options: string[];
  onSelectAnswer: (answer: string) => void;
}

export default function Question({ question, options, onSelectAnswer }: QuestionProps) {
  return (
    <View>
      <Text>{question}</Text>
      {options.map((option: string, index: number) => (
        <Button
          key={index}
          title={option}
          onPress={() => onSelectAnswer(option)}
        />
      ))}
    </View>
  );
}
