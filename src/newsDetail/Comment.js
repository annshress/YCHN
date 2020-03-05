import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {timeSince} from '../utils/datetime';

const Comment = props => {
  const {text, time, by, level} = props.comment;

  return (
    <View style={{paddingLeft: level, marginTop: level ? -7 : 0}}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>{timeSince(time)} - </Text>
          <TouchableOpacity>
            <Text style={styles.authorText}>{by}</Text>
          </TouchableOpacity>
        </View>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderLeftColor: 'pink',
    borderLeftWidth: 5,
    borderRadius: 4,
    shadowColor: 'grey',
    elevation: 5,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
  },
  authorText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Comment;
