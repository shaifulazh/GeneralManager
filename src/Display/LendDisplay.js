import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function LendDisplay() {
    return (
        <View style={styles.container}>
            <Text>Lend Display </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor : '#EA202C',
        height : '100%'
    }
})