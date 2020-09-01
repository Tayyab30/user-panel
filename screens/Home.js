import React from "react";

import { View, Button, StyleSheet, Dimensions, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default (props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingVertical: theme.sizes.base * 2 }}
        >
            <Text> Hello </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: { width: 200, height: 300 }
})