import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Picker,
} from 'react-native';
import CommentBottomBar from './CommentBottomBar';
import CommentTopBar from './CommentTopBar';
import MinimizedComment from './MinimizedComment';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Comment = props => {
  const {comment, minimizeComment} = props;
  const {text, time, by, level, id} = props.comment;

  return comment.hidden ? (
    <View>
      <Text>hidden</Text>
    </View>
  ) : (
    <View style={{paddingLeft: level, marginTop: level ? -7 : 0}}>
      <TouchableWithoutFeedback
        onLongPress={() => {
          // alert('long pressed');
          minimizeComment(id);
        }}>
        {comment.minimized ? (
          <MinimizedComment />
        ) : (
          <View style={styles.container}>
            <CommentTopBar time={time} by={by} />
            <View>
              <Text>{text}</Text>
            </View>
            <CommentBottomBar />
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderLeftColor: 'pink',
    borderLeftWidth: 5,
    borderRadius: 4,
    shadowColor: 'grey',
    elevation: 5,
    backgroundColor: 'white',
  },
  picker: {
    // width: 300,
    // height: 300,
  },
});

export default Comment;
