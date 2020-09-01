import React from 'react';


import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from "../constants";

import CartScreen from "../screens/Cart";
import AccountScreen from "../screens/Account";

import ProductsNavigation from "./Products";
import AuthNavigator from "./Auth";
// import Login from './Auth';
// import Register from './Auth';




const CartNavigator = createStackNavigator({
    Cart: CartScreen
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: theme.colors.dark },
        headerTintColor: "white"
    }
})

const AccountNavigator = createStackNavigator({
    Account: {
        screen: AccountScreen
    },
    Auth : { 
        screen: Login
    },
    Auth : { 
        screen: Register
    }

}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: theme.colors.dark },
        headerTintColor: "white"
    }
})

export default createMaterialBottomTabNavigator({
    Home: {
        screen: ProductsNavigation,
        navigationOptions: {
            title: "Home",
            tabBarIcon: <Entypo name="home" size={24} color="white" />,
        }
    },
    Cart: {
        screen: CartNavigator,

        navigationOptions: {
            tabBarIcon: <Entypo name="shopping-cart" size={24} color="white" />
        }
    },
    Account: {
        screen: AccountNavigator,
        navigationOptions: {
            tabBarIcon: <MaterialCommunityIcons name="account" size={28} color="white" />
        }
    }
}, {
    initialRouteName: "Home",
    shifting: true,
    barStyle: { backgroundColor: theme.colors.dark }
})