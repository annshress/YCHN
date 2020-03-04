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
  const {title, url, time} = props;

  const showUrl = () => {
    ToastAndroid.show(url, ToastAndroid.SHORT);
  };

  const since = timeSince(time);

  return (
    <View style={styles.container}>
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
            <Text>{since}</Text>
          </View>
        </View>
        <View style={styles.like}>
          <Text>Like</Text>
        </View>
        <View style={styles.save}>
          <Text>Save</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  title_container: {},
  title: {
    fontSize: 20,
  },
  subContainer: {
    marginTop: 10,
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

export default NewsTitle;
