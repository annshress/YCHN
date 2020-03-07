import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import NewsTitle from './NewsTitle';
import Comments from './comments/Comments';
import {COMMENTS} from '../constants';

class NewsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: COMMENTS, // flat comments
    };

    this.updateState = this.updateState.bind(this);
    this.getCommentById = this.getCommentById.bind(this);
    this.hideComments = this.hideComments.bind(this);
    this.minimizeComment = this.minimizeComment.bind(this);
  }

  componentDidMount() {}

  updateState(updatedComments) {
    // console.log(this.state.comments);
    const updatedIds = updatedComments.map(comment => comment.id);
    this.setState(oldState => {
      return {
        comments: [
          ...oldState.comments.filter(
            each => updatedIds.indexOf(each.id) === -1,
          ),
          ...updatedComments,
        ],
      };
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

  render() {
    const {detail} = this.props;

    return (
      <View style={styles.container}>
        <NewsTitle {...detail} />
        <ScrollView>
          <Comments
            comments={this.state.comments}
            children={this.state.comments.filter(
              comment => comment.parent == detail.id,
            )}
            minimizeComment={this.minimizeComment}
            level={0}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsBody;
