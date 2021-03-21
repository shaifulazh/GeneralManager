import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ReminderDisplay() {
    return (
        <View style={styles.container}>
            <Text>Reminder </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor : '#C0DF81',
        height : '100%'
    }
})