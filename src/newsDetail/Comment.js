import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Comment = props => {
  const {text} = props.comment;

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderLeftColor: 'pink',
    borderLeftWidth: 6,
    borderRadius: 4,
    shadowColor: 'grey',
    elevation: 5,
    backgroundColor: 'white',
  },
});

export default Comment;
