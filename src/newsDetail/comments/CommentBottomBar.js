import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const CommentBottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomPaddingLeft}>
        <TouchableOpacity>
          <Text>&bull;&bull;&bull;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomPaddingLeft}>
        <Text>Reply</Text>
      </View>
      <View>
        <Text>Vote</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  bottomPaddingLeft: {
    paddingRight: 50,
  },
});

export default CommentBottomBar;
