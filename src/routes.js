import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/index';
import Finder from './pages/Finder/index';
const AppStack = createStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none"
                screenOptions={{ cardStyle: { backgroundColor: 'lightgray' } }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Finder" component={Finder} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;