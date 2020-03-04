import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NewsTitle from './NewsTitle';

const NewsBody = props => {
  const {detail} = props;
  return (
    <View style={styles.container}>
      <NewsTitle {...detail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsBody;
