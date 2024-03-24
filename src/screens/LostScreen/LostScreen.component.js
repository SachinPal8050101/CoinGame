import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LostScreen = () => {
  return (
    <View style={styles.styles}>
      <Text>LostScreen.component</Text>
    </View>
  );
};

export default LostScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
