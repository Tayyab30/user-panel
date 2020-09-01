import { createStackNavigator } from 'react-navigation-stack';

import { theme } from "../constants";
import CategoryScreen from '../screens/Category';
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductsDetailScreen";

const ProductsNavigation = createStackNavigator({
    Category: {
        screen: CategoryScreen,
    },
    Products: {
        screen: ProductsScreen
    },
    ProductDetails: {
        screen: ProductDetailScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: theme.colors.dark },
        headerTintColor: "white"
    }
})

export default ProductsNavigation; 