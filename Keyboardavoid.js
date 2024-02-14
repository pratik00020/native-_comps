/* This component will automatically adjust its height, position, 
or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed. */
import React from 'react';
import {
    view,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
} from 'react-native';

const KeyboardAvoidingComponent = () => {
    retrun (
        <KeyboardAvoidingView 
          behavior={platform.OS === 'ios' ? 'padding': 'height'}
          style={StyleSheet.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <view style={StyleSheet.inner}>
                    <Text style={Styles.header}>header</Text>
                    <TextInput placeholder="Username" style={Styles.TextInput} />
                    <View style={Styles.btncontainer}>
                        <Button title="Submit" onPress={() =>null} />
                    </View>
                </view>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'space-around',
    },
    header: {
      fontSize: 36,
      marginBottom: 48,
    },
    textInput: {
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 36,
    },
    btnContainer: {
      backgroundColor: 'white',
      marginTop: 12,
    },
  });
  
  export default KeyboardAvoidingComponent;
