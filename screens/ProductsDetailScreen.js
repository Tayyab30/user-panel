import React from "react";

import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Feather } from '@expo/vector-icons';

import { Block, Text, Button } from "../components";


import { theme, mocks } from "../constants"

const { width, height } = Dimensions.get('screen');

function ProductsDetailScreen(props) {


    return (
        <View >
            <ScrollView >
                <SliderBox images={mocks.products[0].images} />
                <Block style={{ paddingHorizontal: 20 }}>
                    <Text h1 bold color={theme.colors.secondary}>Rs {mocks.products[0].price}</Text>
                    <Text h1 bold color={theme.colors.black}>{mocks.products[0].name}</Text>
                    <Text h2 color={theme.colors.gray}>{mocks.products[0].description}</Text>
                    <Block row >
                        <Button style={styles.buyButton}>
                            <Text color="white">BUY NOW </Text>
                        </Button>
                        <Button style={styles.cartButton}>
                            <Feather name="shopping-cart" size={24} color="white" />
                        </Button>

                    </Block>
                </Block>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cartButton: {
        width: (width / 5) - 30,
        marginLeft: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary
    },
    buyButton: {
        width: (width - (width / 5)) - 30,
        marginRight: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.dark
    }
})



ProductsDetailScreen.navigationOptions = (navigation) => {

    return {
        title: "Product"
    }
}

export default ProductsDetailScreen;