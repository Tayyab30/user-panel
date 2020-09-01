import React, { useState } from 'react';

import { StyleSheet, Dimensions, FlatList, Image, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';

import { Block, Text, Input, Button, Card } from "../components";
import { theme, mocks } from "../constants";

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');


const CARD_WIDTH = (screenWidth / 3) - 10;
const CARD_HEIGHT = screenWidth * 0.45;

const ProductsScreen = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (text) => {
        setValue(text)
    }

    const _renderCard = ({ item }) => {
        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => props.navigation.navigate('ProductDetails')}>
                <Card shadow style={{ height: CARD_HEIGHT, padding: 0 }} >
                    <Image source={item.images[0]} style={{ width: CARD_WIDTH, height: CARD_HEIGHT / 2, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
                    <View style={{ paddingHorizontal: 5, paddingTop: 10 }}>
                        <Text>{item.name}</Text>
                        <Text bold color={theme.colors.secondary}>25 $</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }

    return (
        <Block>
            <Block flex={false} style={styles.header}>
                <Block flex={1} row space="between" center middle style={styles.searchContainer}>
                    <TouchableOpacity activeOpacity={0.15} onPress={() => props.navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Input value={value} style={styles.searchBar}
                        placeholder="Search"
                        autoFocus={false}
                        onChangeText={(text) => handleChange(text)}
                    />
                </Block>
            </Block>
            <Block flex={false} style={styles.productContainer}>
                <FlatList
                    data={mocks.products}
                    renderItem={_renderCard}
                    keyExtractor={item => item.id}
                    numColumns={3}
                />
            </Block>
        </Block>
    )
};


ProductsScreen.navigationOptions = (navigation) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: theme.sizes.padding,
        paddingHorizontal: theme.sizes.padding / 2,
        backgroundColor: theme.colors.dark,
        height: screenHeight * 0.15
    },
    searchBar: {
        backgroundColor: theme.colors.white,
        width: (screenWidth - theme.sizes.padding) - 35,
        paddingHorizontal: theme.sizes.padding,
    },
    searchContainer: {
        marginTop: 18,
    },
    productContainer: {
        marginTop: 10,
    },
    cardContainer: {
        marginHorizontal: 5,
        width: CARD_WIDTH
    }
})

export default ProductsScreen; 