/**
 * Created by varun on 20/1/18.
 */
import React from 'react';
import { StyleSheet, Text, Image,View,Button,ActivityIndicator,FlatList} from 'react-native';

export default class Details extends React.Component {

    constructor(props){
        super(props);
        this.state ={show:true};
    }

    buttonPress = ()  => {
        this.setState({show: !this.state.show})
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
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
