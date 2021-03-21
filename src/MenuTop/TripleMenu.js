import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default function TripleMenu({
  first,
  middle,
  last,
  setPressAction,
  setGroupMenu,
  group,
  activeMenu,
  setActiveMenu
}) {


  return (
    <View
      style={{flex: 1, flexDirection: 'row', alignContent: 'space-between'}}>
      <View style={{flex: 1}}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            setPressAction(first);
            setGroupMenu(group);
            setActiveMenu(first);
          }}>
          <View
            style={[
              styles.button,
              styles.borderButton,
              activeMenu===first ? styles.activeButton : null
            ]}>
            <Text>{first}</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{flex: 1}}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            setPressAction(middle);
            setGroupMenu(group);
            setActiveMenu(middle);
          }}>
          <View
            style={[
              styles.button,
              styles.borderButton,
              activeMenu===middle ? styles.activeButton : null
           
            ]}>
            <Text>{middle}</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{flex: 1}}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            setPressAction(last);
            setGroupMenu(group);
            setActiveMenu(last);
          }}>
          <View
            style={[
              styles.button,
              styles.borderButton,
              activeMenu===last ? styles.activeButton : null
            ]}>
            <Text>{last}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffbe0f',

    alignItems: 'center',
    padding: 5,
  },
  borderButton: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 3,
  },
  activeButton: {
    backgroundColor: 'darkorange',

    borderBottomColor:'darkorange'
  },
});
