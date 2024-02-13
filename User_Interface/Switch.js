/* This is a controlled component that requires an onvalueChange callback that updates the value prop in order 
for the component to reflect user actions. If the value prop is not updated, the component will continue to render 
the supplied value prop instead of the expected result of any user actions.  */

import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const App = () => {
    const [isEnabled, setIsEnabled] = useState(flase);
    const toggleSwitch = () => setIsEnabled(previosState => !previousState);

    return(
        <View style={StyleSheet.container}>
            <switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : 'f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              values={isEnabled}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default App;