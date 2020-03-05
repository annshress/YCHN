import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NewsTitle from './NewsTitle';
import Comments from './Comments';

const NewsBody = props => {
  const {detail} = props;
  return (
    <View style={styles.container}>
      <NewsTitle {...detail} />
      <Comments kids={detail.kids} root={detail.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsBody;
