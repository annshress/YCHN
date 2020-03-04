import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {timeSince} from '../utils/datetime';

const NewsTitle = props => {
  const {title, url, time, descendants} = props;

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
        <View style={styles.subContainer}>
          <View style={styles.link}>
            <View>
              <Text>{url}</Text>
            </View>
            <View>
              <Text style={styles.sinceText}>{since}</Text>
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
  comment: {
    marginTop: 5,
    marginLeft: 20,
    paddingBottom: 5,
  },
  commentText: {
    fontSize: 18,
  },
  sinceText: {
    color: 'darkorange',
  },
  border: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});

export default NewsTitle;
