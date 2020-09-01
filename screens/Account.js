import React, { useState } from "react";
import { Button, Text } from "../components";
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Image
} from "react-native";
import { theme } from "../constants";

const AccountScreen = ( props ) => {

    const [loading, setLoading] = useState(false);
    const handleLogin = () => { props.navigation.navigate("Login")  }
    const handleSignup = () => { props.navigation.navigate("Register")  }

    return (
        <View style={styles.screen}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/images/icon.png')}
            />
            <Button style={styles.buttton}
                onPress={() => handleLogin() }
            >
                <Text center color='white' bold size={19}>Login</Text>
            </Button>
            <Button style={styles.buttton}
                onPress={() => handleSignup() }
            >
                <Text center color='white' bold size={19}>Create Account</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.colors.primary
    },
    buttton: {
        backgroundColor: theme.colors.dark,
        width: 250,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
})
export default AccountScreen;