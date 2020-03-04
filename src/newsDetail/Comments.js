import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Comment from './Comment';

const Comments = props => {
  const {kids} = props;

  // using the kids IDs, fetch the resources
  const [comments] = React.useState([
    {
      by: '_ph_',
      id: 22483676,
      kids: [
        22483709,
        22484168,
        22483757,
        22483906,
        22484092,
        22483800,
        22483975,
      ],
      parent: 22482731,
      text:
        'I am impressed by these videos any time the pop up on hacker news. But one thing struck me: that they are using those large floatation rings. A lot of the incidents seem to be where a child looses contact to the ring and then cannot swim on itself. \nI am wondering, why they are allowed at all. In my personal experience, I have rarely seen such rings in public pools and that basically means, you are not getting far into the deep part of the pool without some basic swimming skills. Most people&#x2F;children wouldn&#x27;t even try as they don&#x27;t feel comfortable with deep water without an aid.',
      time: 1583329646,
      type: 'comment',
    },
    {
      by: 'balls187',
      id: 22485314,
      kids: [22486211, 22485764, 22485653],
      parent: 22482731,
      text:
        'When I was 12, I went on a week long hike as a scout. We decided to swim across a lake, and 1&#x2F;2 way through, I got tired, and tried swimming back, but couldn&#x27;t.<p>I remember having the presence of mind to yell out help before blanking out. My closest friend in the troop luckily turned around, swam back to and drug me back to shore.<p>I was scared of the water after that, but some how ended up fighting my fear and earning the swimming merit badge, which for a weak swimmer, was no easy task.<p>For his heroism, and because I had overcome my near death experience, we were both recognized for embodying different aspects of scouting.<p>That incident in the lake inspired my friend to go on to become a life-guard.<p>Both my kids started swim lessons in infancy, and my oldest son gets compliments for his swimming skills while at the public pool. Though the pool we use has life guards, I never for a second take my eyes of my kids.<p>Maybe one day they&#x27;ll go on to be life guards prior to college.',
      time: 1583340431,
      type: 'comment',
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {comments.map(comment => (
        <Comment key={comment.id} {...{comment}} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Comments;
