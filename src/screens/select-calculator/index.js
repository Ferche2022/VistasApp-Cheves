import { Button, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const SelectCalculator = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Select Calculator</Text>
            <Button title="Go to TimiCalc Screen" onPress={() => navigation.navigate('TimiCalc')} />
        </View>
    )
}

export default SelectCalculator;