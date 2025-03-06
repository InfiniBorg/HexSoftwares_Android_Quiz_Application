import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Quiz: { score: number; totalQuestions: number };
  Results: { score: number; totalQuestions: number };
};

type ResultsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;
type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;

interface ResultsScreenProps {
  navigation: ResultsScreenNavigationProp;
  route: ResultsScreenRouteProp;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ navigation, route }) => {
  const { score, totalQuestions } = route.params;

  return (
    <View>
      <Text>Your Score: {score} / {totalQuestions}</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ResultsScreen;
