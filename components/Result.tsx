import React from 'react';
import { View, Text } from 'react-native';

interface ResultProps {
  score: number;
  totalQuestions: number;
}

export default function Result({ score, totalQuestions }: ResultProps) {
  return (
    <View>
      <Text>You scored {score} out of {totalQuestions}</Text>
    </View>
  );
}
