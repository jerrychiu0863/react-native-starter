import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(count + 1)} />
      <Button title="Decrease" onPress={() => setCounter(count - 1)} />
      <Text>Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
