import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const SubTitle = props => {
  const {url, since, by} = props;

  return (
    <View style={styles.subContainer}>
      <View style={styles.link}>
        <View>
          <Text>{url}</Text>
        </View>
        <View style={styles.author}>
          <Text>{since} - </Text>
          <Text style={styles.authorText}>{by}</Text>
        </View>
      </View>
      <View style={styles.like}>
        <TouchableOpacity>
          <Text>Like</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.save}>
        <TouchableOpacity>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    flex: 6,
  },
  like: {
    flex: 1,
  },
  save: {
    flex: 1,
  },
  author: {
    flexDirection: 'row',
  },
  authorText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default SubTitle;
