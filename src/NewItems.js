/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {HEADER_HEIGHT, NEWS} from './constants';
import Animated from 'react-native-reanimated';

const NewsNumber = ({index, upvoted}) => {
  return (
    <View style={styles.newsSNcontainer}>
      <View>
        <Text>{index + 1}</Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: upvoted ? 'gray' : 'white',
          }}>
          A
        </Text>
      </View>
    </View>
  );
};

const NewsTitle = ({title}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.newsTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const NewsMeta = ({detail}) => {
  if (!detail.hidden) {
    return (
      <View style={styles.newsMeta}>
        <View style={{flexDirection: 'row'}}>
          <Text>{detail.points} points</Text>
          <Text>
            {' '}
            by {detail.creator.name.slice(0, 10)}
            {detail.creator.name.length > 10 ? '..' : null}
          </Text>
          <Text> {detail.time}</Text>
        </View>
        <Text> {detail.comments_count} comments</Text>
      </View>
    );
  }
};

const NewsItem = ({detail, index}) => {
  return (
    <View style={styles.newsItem}>
      <View style={{flex: 1}}>
        <NewsNumber index={index} upvoted={detail.upvoted} />
      </View>
      <View style={{flex: 10, paddingLeft: 8}}>
        <NewsTitle title={detail.title} url={detail.url} />
        <NewsMeta detail={detail} />
      </View>
    </View>
  );
};

const NewItems = ({onScroll}) => {
  return (
    <Animated.ScrollView
      bounces={false}
      style={styles.container}
      scrollEventThrottle={5}
      onScroll={onScroll}>
      {NEWS.map((item, index) => (
        <NewsItem key={index} detail={item} index={index} />
      ))}
      <View style={{height: 100, paddingLeft: 10}}>
        <Text>Load More...</Text>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: HEADER_HEIGHT + 10,
  },
  newsItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    // backgroundColor: 'blue',
    marginVertical: 5,
  },
  newsSNcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    // backgroundColor: 'red',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsMeta: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 0,
  },
});

export default NewItems;
