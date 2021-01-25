import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: '#000',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'green',
    height: 50,
    width: 50,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    width: 50,
    top: 50,

    // marginVertical: 50,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'blue',
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
