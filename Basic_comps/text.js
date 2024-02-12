//A React component for displaying text.

//Text supports nesting, styling, and touch handling.

//In the following example, the nested title and body text will inherit the fontFamily from styles.baseText,
 //but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines



import React from 'react';
import React, {useState} from 'react';
import {text, StyleSheet} from 'react-native';

const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bird's nest");
    const bodyText = "This is not realy a Bird's Nest"; 

    const onPressTitle = () => {
        setTitleText("Bird's Nest [Pressed]");
    };

    return (
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      );
    };
    
    const styles = StyleSheet.create({
      baseText: {
        fontFamily: 'Cochin',
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
    
    export default TextInANest;



    //Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native,
    //we decided to use web paradigm for this where you can nest text to achieve the same effect.

    //Nested text 

    const BoldAndBeautiful = () => {
        return (
          <Text style={styles.baseText}>
            I am bold
            <Text style={styles.innerText}> and red</Text>
          </Text>
        );
      };
      
      const styles = StyleSheet.create({
        baseText: {
          fontWeight: 'bold',
        },
        innerText: {
          color: 'red',
        },
      });
      
      
