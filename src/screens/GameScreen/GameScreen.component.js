import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const GameScreen = () => {
  return (
    <View style={styles.styles}>
      <Text>GameScreen.component</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
