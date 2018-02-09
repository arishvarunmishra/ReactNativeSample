/**
 * Created by varun on 20/1/18.
 */
import {
    StackNavigator,
} from 'react-navigation';


import Home from './src/home'
import Detail from './src/detail'



const routes ={
    Home:{
        screen:Home,
        navigationOption:{
            title:'Home'
        }
    },
    Detail: {
        screen: Detail
    },
}

export default StackNavigator(routes,{
    initalRouteName:"Home"
});
