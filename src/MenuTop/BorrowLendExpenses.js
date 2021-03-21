import React from 'react'
import { View, Text } from 'react-native'

export default function BorrowLendExpenses() {
    return (
       <View style={{flex:1,flexDirection: "row",
            alignContent: "space-between",}}>
    <View style={{flex:1}}>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
        <View style={[styles.button, styles.borderButton]}>
          <Text>Todo</Text>
        </View>
      </TouchableHighlight>
    </View>
    <View style={{flex:1}}>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
        <View style={[styles.button, styles.borderButton]}>
          <Text>Schedule</Text>
        </View>
      </TouchableHighlight>
    </View>
    <View style={{flex:1}}>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
        <View style={[styles.button, styles.borderButton]}>
          <Text>Remind</Text>
        </View>
      </TouchableHighlight>
    </View>
    </View>
    
    )
}
