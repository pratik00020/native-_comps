/* A foundational component for inputting text into the app via a keyboard. 
Props provide configurability for several features, 
such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, 
such as a numeric keypad. */

/* The most basic use case is to plop down a TextInput and subscribe to the onChangeText events to read the user input.
There are also other events, such as onSubmitEditing and onFocus that can be subscribed to.
A minimal example: */


import React from 'react';
import {View,SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
     
    return (
        <SafeAreaView>
            <TextInput
              style={Styles.input}
              onChangeText={onChangeText}
              value={text}
              />
              <TextInput 
                style={Styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder= "useless placeholder"
                keyboardType="numeric"
            />
            </SafeAreaView>
            
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  export default TextInputExample;

/* Two methods exposed via the native element are .focus() and .blur() that will focus or blur the TextInput programmatically.

Note that some props are only available with multiline={true/false}.
Additionally, border styles that apply to only one side of the element 
(e.g., borderBottomColor, borderLeftWidth, etc.) will not be applied if multiline=true. 
To achieve the same effect, you can wrap your TextInput in a View: */



const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, 
  //the background will change to that color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
};