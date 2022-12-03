import React, { useState, useEffect } from "react";
import { Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";


import RootNavigator from './root'


export default () => {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}