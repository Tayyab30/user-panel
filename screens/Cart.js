import React, { useState } from "react";

import { FlatList, Image, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import RoundCheckbox from 'rn-round-checkbox';

import { Block, Text, Button, Input } from "../components";

import { theme, mocks } from "../constants";

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const CARD_HEIGHT = screenHeight * 0.17;
const CONTENT_WIDTH = '100%';

function CartCard(props) {
    const [inputValue, setInputValue] = useState(1);
    const [isSelected, setIsSelected] = useState(false);

    const {
        id,
        price,
        name,
        img,
        getItem, } = props;

    const inStock = 10;
    const increment = () => {
        if (inputValue === inStock) {
            return
        } else {
            const value = inputValue + 1;
            setInputValue(value);
            if (isSelected) {
                getItem({ isSelected, id, price, quantity: value })
            }

        }
    }
    const decrement = () => {
        if (inputValue === 1) {
            return
        } else {
            const value = inputValue - 1;
            setInputValue(value)
            if (isSelected) {

                getItem({ isSelected, id, price: -price, quantity: value })
            }

        }
    }

    const handleSelected = (newValue, id, price) => {
        setIsSelected(!isSelected);
        getItem({ isSelected: newValue, id, price, quantity: inputValue })
    }

    return (


        <Block row style={styles.cartCard}>
            <Block flex={false} style={{ marginHorizontal: 5 }}>
                <RoundCheckbox
                    size={24}
                    checked={isSelected}
                    backgroundColor={theme.colors.secondary}
                    iconColor={theme.colors.white}
                    onValueChange={(newValue) => { handleSelected(newValue, id, price) }}
                />
            </Block>
            <Image source={img} style={styles.cartCardImage} />
            <Block style={{ height: CARD_HEIGHT, paddingHorizontal: 10, width: 300 }}>
                <Block flex={false} style={{ height: CARD_HEIGHT / 2 }}>
                    <Text title bold style={styles.contentBlock}>{name}</Text>
                </Block>
                <Text bold color={theme.colors.gray}>Stock {inStock}</Text>
                <Block row style={styles.contentBlock}>
                    <Text h1 bold color={theme.colors.secondary} >Rs {price}</Text>
                    <Block row style={{ justifyContent: 'flex-end', marginRight: 20, marginTop: -5 }} >
                        <Button style={styles.cartButton} onPress={increment}>
                            <AntDesign name="pluscircle" size={18} color={theme.colors.white} />
                        </Button>
                        <Input editable={false} value={`${inputValue}`} style={styles.input} />
                        <Button style={styles.cartButton} onPress={decrement} >
                            <AntDesign name="minuscircle" size={18} color={theme.colors.white} />
                        </Button>
                    </Block>
                </Block>
            </Block>
        </Block>


    )
}

function CartScreen(props) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemToCheckOut, setItemToCheckOut] = useState([]);

    const getSelectedItem = ({ isSelected, id, price, quantity }) => {
        console.log(quantity, isSelected, price, quantity)
        if (isSelected) {
            if (itemToCheckOut.length > 0) {
                const indexOfItem = itemToCheckOut.findIndex(item => item.id === id);
                if (indexOfItem === -1) {
                    setItemToCheckOut([...itemToCheckOut, { id, price }]);
                } else {
                    itemToCheckOut.splice(indexOfItem, 1, { id, price });
                    console.log(itemToCheckOut);
                    setItemToCheckOut([...itemToCheckOut]);
                }
            } else {
                setItemToCheckOut([...itemToCheckOut, { id, price }]);
            }

        } else {
            const filteredCheckOutItem = itemToCheckOut.filter(d => d.id === id);
            setItemToCheckOut(filteredCheckOutItem);
        }
    }

    const _renderCard = ({ item }) => {
        return (
            <CartCard {...props}
                id={item.id}
                price={item.price}
                name={item.name}
                img={item.images[0]}
                getItem={getSelectedItem}
            />


        )
    }

    console.log(itemToCheckOut)
    return (

        <Block>
            <Block flex={false} style={{ height: "87%" }}>
                <FlatList
                    data={mocks.products}
                    renderItem={_renderCard}
                    keyExtractor={item => item.id}
                    numColumns={1}
                />
            </Block>
            <Block row style={{ height: "13%", width: screenWidth, paddingHorizontal: 10, marginTop: 4, position: "absolute", bottom: 0 }} >
                <Block style={{ width: screenWidth - (200 + 20), justifyContent: 'center', alignItems: 'center' }}>
                    <Text h2 bold color={theme.colors.secondary} style={{ top: -10 }}> Rs
                        <Text h1 bold  > {totalPrice} </Text>
                    </Text>
                </Block>
                <Button style={styles.checkOutButton} >
                    <Text style={{ color: theme.colors.white, fontSize: 20, }}>
                        Check Out
                    </Text>
                </Button>
            </Block>
        </Block>
    )
}

CartScreen.navigationOptions = (navigation) => ({
    title: "Cart Screen"
});

const styles = StyleSheet.create({
    cartCard: {
        marginTop: 5,
        width: screenWidth,
        height: CARD_HEIGHT,
        backgroundColor: theme.colors.white,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cartCardImage: {
        width: '25%',
        height: CARD_HEIGHT,
    },
    contentBlock: {
        width: CONTENT_WIDTH,
        marginTop: 10
    },
    cartButton: {
        width: 50,
        height: 30,
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 0,
        marginHorizontal: 5,
        marginTop: -7.5,
        borderRadius: 0,
        width: 40,
        height: 30,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 5
    },
    checkOutButton: {
        width: 150,
        backgroundColor: theme.colors.dark,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center"
    }
})


export default CartScreen; 