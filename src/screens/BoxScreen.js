import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box 1</Text>
      <Text style={styles.textTwoStyle}>Box 2</Text>
      <Text style={styles.textThreeStyle}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: '#000',
    height: 200,
    alignItems: 'flex-start',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-start',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'center',
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'stretch',
  },
});

export default BoxScreen;
