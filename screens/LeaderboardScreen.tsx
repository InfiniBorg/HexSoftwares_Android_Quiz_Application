import React from 'react';
import { View, Text } from 'react-native';

export default function LeaderboardScreen() {
  const leaderboard = [
    { name: 'User1', score: 10 },
    { name: 'User2', score: 8 },
    { name: 'User3', score: 7 },
  ];

  return (
    <View>
      <Text>Leaderboard</Text>
      {leaderboard.map((item, index) => (
        <Text key={index}>{item.name}: {item.score}</Text>
      ))}
    </View>
  );
}
