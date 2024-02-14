/* A common feature request from developers familiar with the web is background-image. 
To handle this use case, you can use the <ImageBackground> component, 
which has the same props as <Image>, and add whatever children to it you would like to layer on top of it.

You might not want to use <ImageBackground> in some cases, since the implementation is basic. 
Refer to <ImageBackground>'s source code for more insight, and create your own custom component when needed. */

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;