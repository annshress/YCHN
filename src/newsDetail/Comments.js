import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Comment from './Comment';
import {COMMENTS} from '../constants';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [], // flat comments
      tree: [], // maintains order
    };

    this.getCommentById = this.getCommentById.bind(this);
    this.minimizeComment = this.minimizeComment.bind(this);
    this.updateState = this.updateState.bind(this);
    this.hideComments = this.hideComments.bind(this);
    this.getCommentTree = this.getCommentTree.bind(this);
  }

  temp = [];

  updateState(updatedComments) {
    console.log();
    console.log();
    console.log(this.temp);
    console.log('TEMP#########');
    console.log();

    function tempUpdate() {
      return oldState => {
        return {tree: this.temp};
      };
    }
    // console.log(this.state.comments);
    const updatedIds = updatedComments.map(comment => comment.id);
    this.setState(
      oldState => {
        return {
          comments: [
            ...oldState.comments.filter(
              each => updatedIds.indexOf(each.id) >= 0,
            ),
            ...updatedComments,
          ],
        };
      },
      () => {
        console.log();
        console.log();
        console.log(this.temp, 'TEMP222222');
        console.log();
        console.log();
        this.getCommentTree(this.props.kids, 0);
        this.setState(tempUpdate());
      },
    );
  }

  componentDidMount() {
    this.setState({comments: COMMENTS}, () => {
      this.getCommentTree(this.props.kids, 0);
      this.setState(old => {
        return {
          ...old,
          tree: this.temp,
        };
      });
    });
  }

  getCommentById(id) {
    return this.state.comments.find(comment => comment.id == id);
  }

  hideComments(ids, hiddenComments) {
    if (!ids) {
      return;
    }
    ids.map(id => {
      const comment = this.getCommentById(id);
      if (!comment) {
        return;
      }
      comment.hidden = true;
      console.log('hiding', comment.by);
      hiddenComments.push(comment);
      // updateState(comment);
      if (comment.kids) {
        this.hideComments(comment.kids, hiddenComments);
      }
    });
  }

  minimizeComment(id) {
    const comment = this.getCommentById(id);
    comment.minimized = true;
    console.log('minimized', comment.by);
    const hiddenComments = [];
    this.hideComments(comment.kids, hiddenComments);
    console.log('hid comments count: ', hiddenComments.length);
    this.updateState([comment, ...hiddenComments]);
  }

  getCommentTree(commentsId, level) {
    if (!level) {
      level = 0;
    }
    commentsId.map(commentId => {
      const comment = this.getCommentById(commentId);
      if (!comment) {
        return;
      }
      this.temp.push({...comment, level: level});
      // do the same for its children
      if (comment.kids) {
        this.getCommentTree(comment.kids, level + 10);
      }
    });
    // console.log('updated tree', tree.length);
  }

  render() {
    console.log(this.state.tree);
    console.log('this.state.tree');
    console.log('this.state.tree');
    console.log('this.state.tree');
    return (
      <ScrollView style={styles.container}>
        {this.state.tree.map(comment => (
          <Comment
            key={comment.id}
            {...{comment}}
            minimizeComment={this.minimizeComment}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default Comments;
