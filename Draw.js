import React from 'react';
import { Text, Button, View } from 'react-native';

export default class DrawScreen extends React.Component {
    static navigationOptions = {
        title: 'Drawnavigator page',
      }; 
      render() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:50 }}>
            <Text>Drawnavigator..!</Text>
          </View>
        );
      }
}