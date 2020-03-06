import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Comment from './Comment';
import {COMMENTS} from '../constants';

const Comments = props => {
  const {kids, root} = props;

  // using the kids IDs, fetch the resources
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setComments(COMMENTS);
  }, []);

  const getComments = () => {
    // fetch next 2 comments and store into state
  };

  const updateState = updatedComments => {
    const updatedIds = updatedComments.map(comment => comment.id);
    setComments(old_comments => {
      return {
        ...old_comments.filter(each => updatedIds.indexOf(each.id) >= 0),
        ...updatedComments,
      };
    });
  };

  const getCommentById = id => {
    return comments.find(comment => comment.id == id);
  };

  const hideComments = (ids, hiddenComments) => {
    ids.map(id => {
      const comment = getCommentById(id);
      if (!comment) {
        return;
      }
      comment.hidden = true;
      hiddenComments.push(comment);
      // updateState(comment);
      if (comment.kids) {
        hideComments(comment.kids, hiddenComments);
      }
    });
  };

  const minimizeComment = id => {
    const comment = getCommentById(id);
    comment.minimized = true;
    const hiddenComments = [];
    hideComments(comment.kids, hiddenComments);
    updateState([comment, ...hiddenComments]);
    console.log(hiddenComments.length);
  };

  let tree = [];

  const getCommentTree = (commentsId, level) => {
    if (!level) {
      level = 0;
    }
    commentsId.map(commentId => {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == commentId) {
          tree.push({...comments[i], level: level});
          // do the same for its children
          if (comments[i].kids) {
            getCommentTree(comments[i].kids, level + 10);
          }
        }
      }
    });
    return tree;
  };

  return (
    <ScrollView style={styles.container}>
      {getCommentTree(kids, 0).map(comment => (
        <Comment
          key={comment.id}
          {...{comment}}
          minimizeComment={minimizeComment}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Comments;
