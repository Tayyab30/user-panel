import React from 'react';

import { Image } from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AuthNavigator from "./Auth";
import MainNavigator from "./Main";
import HomeScreen from "../screens/Home";

import { theme } from "../constants";

// const AppNavigator = createStackNavigator({
//     Main: {
//         screen: MainNavigator,
//         navigationOptions: {
//             title: "Home"
//         }
//     },
//     Auth: {
//         screen: AuthNavigator
//     }

// });

export default createAppContainer(MainNavigator);