import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ScheduleDisplay() {
    return (
        <View style={styles.container}>
            <Text>Schedule Display</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#98CA32',
        height : '100%'
    }
})