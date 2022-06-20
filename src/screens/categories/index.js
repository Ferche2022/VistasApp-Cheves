import { Button, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const CalculatorScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Calculator Screen</Text>
            <Button title="Go to Select Calculator Screen" onPress={() => navigation.navigate('select-calculator')} />
        </View>
    ) 
}

export default CalculatorScreen;