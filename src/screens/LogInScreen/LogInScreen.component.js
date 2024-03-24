import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LogInScreen = () => {
  return (
    <View style={styles.styles}>
      <Text>LogInScreen.component</Text>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
