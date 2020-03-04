import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import NewItems from './NewItems';
import {HEADER_HEIGHT} from './constants';
import Animated from 'react-native-reanimated';

StatusBar.setBackgroundColor('darkorange');

const YNicon = () => {
  return (
    <View style={styles.yniconView}>
      <Text style={styles.ynicon}>Y</Text>
    </View>
  );
};

const Header = ({headerHeight}) => {
  return (
    <Animated.View style={[styles.header, {top: headerHeight}]}>
      <YNicon />
      <Text style={styles.headerText}>HackerNews</Text>
      <View style={styles.menu}>
        <Text>Menu</Text>
      </View>
    </Animated.View>
  );
};

const Home = () => {
  const scrollY = new Animated.Value(0);
  const diffClampedScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);

  const headerHeight = Animated.interpolate(diffClampedScrollY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
  );

  return (
    <View style={styles.container}>
      <Header headerHeight={headerHeight} />
      <NewItems onScroll={onScroll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'gray',
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: 'darkorange',
    zIndex: 1001,
  },
  headerText: {fontWeight: 'bold', fontSize: 15},
  yniconView: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 7,
    marginLeft: 10,
  },
  ynicon: {
    fontSize: 20,
    color: 'white',
  },
  menu: {
    backgroundColor: 'red',
    marginRight: 10,
  },
});

export default Home;
