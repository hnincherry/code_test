import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from './root'

export default () => {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}