import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const GameHistoryScreen = () => {
  return (
    <View style={styles.styles}>
      <Text>GameHistoryScreen.component</Text>
    </View>
  );
};

export default GameHistoryScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
