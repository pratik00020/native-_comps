/*A basic button component that should render nicely on any platform. Supports a minimal level of customization.

If this button doesn't look right for your app, you can build your own button using Pressable.
for inspiration, look at the source code for the Button component.*/


import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert
} from 'react-native';

const Seperator =() => <View style={Styles.seperator} />;
const App = () => (
    <SafeAreaView style={styles.container}>
        <view>
            <Text style={styles.title}>
                The Title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
            </Text>
            <Button
             title="Press Me"
             onPress={() => Alert.alert('simple Button pressed')}
             />
        </view>
        <Separator />
        <View>
            <Text style={styles.title}>
                adjust the color in a way that looks standard on each platform. on ios, the color prop controls the color of the text. On Android, the color adjust the backgorund color of the button.
            </Text>
            <Button
             title="Press me"
             color="f194ff"
             onPress ={() => Alert.alert('Button with adjusted color pressed')}
             />
        </View>
        <Seperator />
        <View>
            <Text style ={styles.title}>
                All interaction for the component are disabled.
            </Text>
            <Button
             title="Press Me"
             disabled
             onPress={() => Alert.alert('Cannot press this one')}
             />
        </View>
        <seperator />
        <View>
            <text style ={Styles.title}>
                This layout strategy lets the title define the width of the button.
            </text>
            <View style={styles.fixToText}>
                <Button 
                 title="Left button"
                 onPress={() => Alert.alert('Left Button pressed')}
                 />
                 <Button 
                 title="Right button"
                 onPress={() => Alert.alert('Right Button pressed')}
                 />
            </View>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  
  export default App;