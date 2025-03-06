import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

interface QuizScreenProps {
  route: any;
  navigation: any;
}

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Who discovered gravity?',
    options: ['Newton', 'Einstein', 'Galileo', 'Tesla'],
    correctAnswer: 'Newton',
  },
];

export default function QuizScreen({ route, navigation }: QuizScreenProps) {
  const { category } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigation.navigate('Result', { score, totalQuestions: questions.length });
    }
  };

  return (
    <View>
      <Text>{category} Quiz</Text>
      <Text>{questions[currentQuestionIndex].question}</Text>
      {questions[currentQuestionIndex].options.map((option: string, index: number) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
    </View>
  );
}
