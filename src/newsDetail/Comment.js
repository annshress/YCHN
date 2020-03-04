import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Comment = () => {
  return (
    <View style={styles.container}>
      <Text>Comment</Text>
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

export default Comment;
