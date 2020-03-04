import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NewsBody from './NewsBody';

const NewsDetail = () => {
  const [state, useState] = React.useState({
    by: 'vinnyglennon',
    descendants: 118,
    id: 22482731,
    kids: [
      22483676,
      22483929,
      22483345,
      22483124,
      22483791,
      22483708,
      22483626,
      22483609,
    ],
    score: 233,
    time: 1583319467,
    title: 'Spot the Drowning Child',
    type: 'story',
    url: 'http://spotthedrowningchild.com/#',
  });

  return (
    <View style={styles.container}>
      <NewsBody detail={state} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default NewsDetail;
