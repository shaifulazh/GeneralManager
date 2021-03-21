import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ToDo() {
    return (
        <View style={styles.container}>
            <Text>To Do Display</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#59761E',
        height : '100%'
    }
})