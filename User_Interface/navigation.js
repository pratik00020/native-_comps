/* Mobile apps are rarely made up of a single screen. Managing the presentation of,
 and transition between,multiple screens is typically handled by what is known as a navigator */

 /* First, you need to install them in your project:
                   npm install @react-navigation/native @react-navigation/native-stack

Next, install the required peer dependencies. 
You need to run different commands depending on whether your project is an Expo managed project or a bare React Native project.
If you have an Expo managed project, install the dependencies with expo:
                   npx expo install react-native-screens react-native-safe-area-context

If you have a bare React Native project, install the dependencies with npm:
                   npm install react-native-screens react-native-safe-area-context */


        /* Now, you need to wrap the whole app in NavigationContainer. 
        Usually you'd do this in your entry file, such as index.js or App.js: */ 
        

        import * as React from 'react';
        import {NavigationContainer} from '@react-navigation/native';

        const App = () => {
            retturn (
                <NavigationContainer>
                    {{/* Rest of Your Code  */}}
                </NavigationContainer>
            );
        };

        export default App;
          