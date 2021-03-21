import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

export default function ExpensesDisplay() {
    return (
        <View style={styles.container}>
            <Text>Expenses </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor : '#F37C84',
        height : '100%'
    }
})