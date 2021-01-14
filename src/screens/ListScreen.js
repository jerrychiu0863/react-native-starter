import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Marek', age: 2 },
    { name: 'Kevin', age: 5 },
    { name: 'Dennis', age: 12 },
    { name: 'Jerry', age: 55 },
    { name: 'John', age: 64 },
    { name: 'Mary', age: 73 },
    { name: 'Blake', age: 21 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        // el === {item: {name: 'Marek'}, index: 0}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default ListScreen;
