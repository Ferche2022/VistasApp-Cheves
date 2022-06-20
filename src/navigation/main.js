import { CalculatorScreen, SelectCalculator, TimiCalc } from "../screens/index";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Calculator">
            <Stack.Screen name="Calculator" component={CalculatorScreen} />
            <Stack.Screen name="SelectCalculator" component={SelectCalculator} />
            <Stack.Screen name="TimiCalc" component={TimiCalc} />
        </Stack.Navigator>
    )
}

export default MainNavigator;