import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NewsTitle from './NewsTitle';

const NewsBody = props => {
  const {title, url, time} = props.detail;
  return (
    <View style={styles.container}>
      <NewsTitle title={title} {...{url}} {...{time}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsBody;
