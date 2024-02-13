/* Displays a circular loading indicator. */

import React from 'react';
import {ActivityIndicaotr, StyleSheet, View} from 'react-native';

const App = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicaotr />
        <ActivityIndicaotr size="large" />
        <ActivityIndicaotr size="small" color="0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
  
  export default App;