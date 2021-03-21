import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function OrderDisplay( {navigation}) {
  return (
    <View style={styles.contentLayout}>


    <View style={styles.table}>
            
     
          <Icon name="rocket" size={30} color="#900" />
      </View>
 
    <View style={styles.footer}>

      <TouchableOpacity onPress={()=>navigation.navigate('Order')} >
        <View style={styles.buttonFooter} >
        <Text>go to order {`>`} </Text>
        </View>
      </TouchableOpacity>
      </View>
</View>
  );
}

const styles = StyleSheet.create({
  contentLayout :{ flex: 1,},
  table: {
    flex: 92,
    backgroundColor: '#F033B4',
    height: '100%',
    flexDirection: 'column',
    padding: 20,
  },
  footer: {
    flex: 8,
    alignItems : 'flex-end',
    backgroundColor: '#F033B4',
  },
  buttonFooter :{
    padding : 10
  }
});
