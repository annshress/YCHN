import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {authorText} from '../assets/styles/styles';

const SubTitle = props => {
  const {url, since, by} = props;

  return (
    <View style={styles.subContainer}>
      <View style={styles.link}>
        <View>
          <Text>{url}</Text>
        </View>
        <View>
          <Text style={authorText.style}>
            Posted by {by} &bull; {since}
          </Text>
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
});

export default SubTitle;
