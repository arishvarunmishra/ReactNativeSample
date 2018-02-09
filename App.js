import React from 'react';
import { StyleSheet, Text, Image,View,Button,ActivityIndicator,FlatList} from 'react-native';
import NavigationView from './navigation'
export default class App extends React.Component {


    constructor(props){
        super(props);
        this.state ={show:true};
    }

  render() {
      return (
      <View style={styles.container}>
          <Text>Main screen content</Text>
          <NavigationView />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },list: {
        backgroundColor: 'skyblue',
    },
    item: {
        flexWrap:'wrap',
        padding: 10,
        fontSize: 18
    },
})
