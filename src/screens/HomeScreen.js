import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;

  return (
    <View>
      <Text style={styles.text}>Hello React Native 123</Text>
      <Button
        onPress={() => navigate('Components')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button onPress={() => navigate('Image')} title="Go to Image Demo" />
      <Button onPress={() => navigate('Counter')} title="Go to Counter Demo" />
      <Button onPress={() => navigate('Color')} title="Go to Color Demo" />
      <Button onPress={() => navigate('Square')} title="Go to Square Demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
