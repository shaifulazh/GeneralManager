import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

export default function BorrowDisplay() {
    return (
        <View style={styles.container}>
            <Text>BorrowDisplay </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor : '#950E17',
        height : '100%'
    }
})