import React from 'react';
import {StyleSheet, View} from 'react-native';
import Comment from './Comment';
import {COMMENTS} from '../../constants';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {minimizeComment, comments, children} = this.props;

    return children.map(comment => (
      <View key={comment.id}>
        <Comment {...{comment}} minimizeComment={minimizeComment} />
        <View style={styles.padLeft} key={comment.id + '1'}>
          <Comments
            comments={comments}
            children={comments.filter(
              child => !child.hidden && child.parent == comment.id,
            )}
          />
        </View>
      </View>
    ));
  }
}

const styles = StyleSheet.create({
  padLeft: {
    paddingLeft: 10,
  },
});

export default Comments;
