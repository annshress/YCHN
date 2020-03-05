import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Comment from './Comment';

const Comments = props => {
  const {kids, root} = props;

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
    {
      by: 'keanzu',
      id: 22483709,
      kids: [22484080, 22484046],
      parent: 22483676,
      text:
        'Those are toys that are fun to play with for people who can swim fine. The problem is when non-swimmers use them as boats. They are not safety devices.<p>Without the rings non-swimmers couldn&#x27;t get into trouble but swimmers have less fun. You could also pave over the pool with concrete and remove the hazard entirely - no fun for swimmers but all risks of drowning removed.',
      time: 1583329974,
      type: 'comment',
    },
    {
      by: 'lzol',
      id: 22484080,
      kids: [22484167, 22484180],
      parent: 22483709,
      text:
        'As someone who worked as a wave pool lifeguard for 8 years and is a current certified Water Safety Instructor, I mostly agree. The large rafts are never really what I have an issue with. It&#x27;s water wings and other personal flotation devices that are much more troublesome.<p>Parents are a huge part of the issue. PFDs give them a false sense of security where they feel like they don&#x27;t have to watch their kid. The best change my old pool ever made was banning them (besides USCG approved life vests). The rafts were almost never an issue unless parents stuck their kid in the middle and stopped supervising (which happened a lot and we&#x27;d yell at the about). Crappy parental supervision is the cause of most problems at pools.',
      time: 1583332742,
      type: 'comment',
    },
  ]);

  const getNextComments = () => {
    // fetch next 2 comments and store into state
  };

  var tree = [];

  const reInitTree = () => {
    tree = [];
  };

  const getCommentTree = (commentsId, level) => {
    if (!level) {
      level = 0;
    }
    commentsId.map(commentId => {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == commentId) {
          tree.push({...comments[i], level: level});
          // do the same for its children
          getCommentTree(comments[i].kids, level + 10);
        }
      }
    });
    return tree;
  };

  return (
    <ScrollView style={styles.container}>
      {getCommentTree(kids, 0).map(comment => (
        <Comment key={comment.id} {...{comment}} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Comments;
