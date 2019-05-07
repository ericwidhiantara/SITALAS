import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/beranda/Home";
import ListMhs from './screens/admin/ListMhs';

const Drawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = createStackNavigator(
    {
        Drawer: { screen: Drawer },

        ListMhs: { screen: ListMhs },
        
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
    <Root>
        <AppContainer />
    </Root>;
