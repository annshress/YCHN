import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {timeSince} from '../../utils/datetime';
import {authorText} from '../../assets/styles/styles';

const CommentTopBar = props => {
  const {time, by} = props;

  return (
    <View style={styles.topBar}>
      <View>
        <Text style={styles.authorText}>
          {by} &bull; {timeSince(time)}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <View>
            <Text>&bull;&bull;&bull;</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorText: {
    ...authorText.style,
    fontWeight: 'normal',
    color: '#777',
  },
});

export default CommentTopBar;
