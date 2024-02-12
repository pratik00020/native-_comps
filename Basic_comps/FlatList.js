/* A performant interface for rendering basic, flat lists, supporting the most handy features:

Fully cross-platform.
Optional horizontal mode.
Configurable viewability callbacks.
Header support.
Footer support.
Separator support.
Pull to Refresh.
Scroll loading.
ScrollToIndex support.
Multiple column support.

If you need section support, use <SectionList> */

import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Statusbar,
} from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
];

const Item = ({title}) => (
    <View style={StyleSheet.item}>
        <text style={StyleSheet.title}>{title}</text>
    </View>
);

const App = () => {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <FlatList
            data={DATA}
            renderItem={({item}) => <item title={item.title}
        /> }
        keyExtractor={item => item.id}
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
  export default App;


 /* To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.

More complex, selectable example below.

1. By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render when the state changes.
Without setting this prop, FlatList would not know it needs to re-render any items because it is a PureComponent and the prop comparison will not show any changes.

2. keyExtractor tells the list to use the ids for the react keys instead of the default key property.*/


import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DAATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Ittem = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const Appp = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DAATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
