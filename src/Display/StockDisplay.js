import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StockDisplay() {
  return (
    <View style={styles.container}>
      <Text>Stock Display</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#448D76',
    height: '100%',
  },
});
