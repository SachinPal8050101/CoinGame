import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import AppContext from '../../store/authStore';

const LogInScreen = () => {
  const {signIn} = useContext(AppContext);

  return (
    <View style={styles.styles}>
      <Text>LogInScreen.component</Text>
      <TouchableOpacity onPress={signIn}>
        <Text> LogIn </Text>
      </TouchableOpacity>
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
