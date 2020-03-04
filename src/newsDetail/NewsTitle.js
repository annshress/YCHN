import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {timeSince} from '../utils/datetime';
import SubTitle from './SubTitle';

const NewsTitle = props => {
  const {title, url, time, descendants, by} = props;

  const showUrl = () => {
    ToastAndroid.show(url, ToastAndroid.SHORT);
  };

  const since = timeSince(time);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.subContainerTop}>
          <View>
            <TouchableOpacity>
              <Text> Article</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Share </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={showUrl}>
            <View style={styles.title_container}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <SubTitle {...{url}} {...{since}} {...{by}} />
        <View style={styles.comment}>
          <Text style={styles.commentText}>{descendants} comments</Text>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    paddingHorizontal: 10,
  },
  title_container: {},
  title: {
    fontSize: 20,
  },
  subContainerTop: {
    paddingVertical: 10,
    flexDirection: 'row-reverse',
  },
  comment: {
    marginTop: 5,
    marginLeft: 20,
    paddingBottom: 5,
  },
  commentText: {
    fontSize: 18,
  },
  sinceText: {
    color: 'red',
  },
  border: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});

export default NewsTitle;
