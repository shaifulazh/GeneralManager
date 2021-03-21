import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SaleDisplay() {
  return (
    <View style={styles.container}>
      <Text>Sale Display</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDDDFC',
    height: '100%',
  },
});
