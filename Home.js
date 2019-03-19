import React from 'react';
import { Text, Button, View } from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home page',
      };    

    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> Welcome to home page..! </Text>
            <Button
             title= "go to profile page"
             onPress={() => { this.props.navigation.navigate('Profile', {
                itemId: 86,
                itemName: 'kitkat',
                }) 
            } }
             />
              <Button
                title= "go for details"
                onPress={() => { this.props.navigation.navigate('Detail', {
                itemId: 86,
                itemName: 'kitkat',
                }) 
            } }
             />
              <Button
                title= "go for drawnavigation"
                onPress={() => { this.props.navigation.openDrawer('Draw')
            } }
             />
            </View>
        );
    }
}