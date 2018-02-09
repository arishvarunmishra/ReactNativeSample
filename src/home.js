/**
 * Created by varun on 20/1/18.
 */
import React from 'react';
import { StyleSheet, Text, Image,View,Button,ActivityIndicator,FlatList} from 'react-native';




export default class Home extends React.Component {

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
                <Text>Home Screen</Text>

                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Button onPress={this.buttonPress} title={"stop loader"}></Button>
                /*<FlatList style={styles.list}
                          data={[
                              {key: 'Devin'},
                              {key: 'Jackson'},
                              {key: 'James'}
                          ]}
                          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />*/
                <ActivityIndicator animating={this.state.show} color={'red'} ></ActivityIndicator>
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
