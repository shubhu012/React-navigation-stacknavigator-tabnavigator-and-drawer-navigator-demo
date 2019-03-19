import React from 'react';
import { Text, Button, View } from 'react-native';

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'profile page',
      }; 

    render(){

        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const itemName = navigation.getParam('itemName', 'some default value');

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> Welcome to Profile page..! </Text>

            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>itemName: {JSON.stringify(itemName)}</Text>

            <Button
             title= "go to Home page"
             onPress={() => this.props.navigation.navigate('Home') } 
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
                        onPress={() => { this.props.navigation.openDrawer('Draw');
                    } }
                />
            </View>
        );
    }
}