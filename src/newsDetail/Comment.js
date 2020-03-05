import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {timeSince} from '../utils/datetime';
import {authorText} from '../assets/styles/styles';

const Comment = props => {
  const {text, time, by, level} = props.comment;

  return (
    <View style={{paddingLeft: level, marginTop: level ? -7 : 0}}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View>
            <Text style={authorText.style}>
              {by} &bull; {timeSince(time)}
            </Text>
          </View>
        </View>
        <View>
          <Text>{text}</Text>
        </View>
        <View style={styles.bottomBar}>
          <View>
            <Text>###</Text>
          </View>
          <View>
            <Text>Reply</Text>
          </View>
          <View>
            <Text>Up</Text>
          </View>
        </View>
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
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Comment;
