import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const CustomSpinner = ({visible}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default CustomSpinner;
