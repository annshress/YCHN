import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MinimizedComment = () => {
  return (
    <View style={styles.container}>
      <Text>minimizedComment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MinimizedComment;
