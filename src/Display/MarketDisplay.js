import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function MarketDisplay({navigation}) {
  return (
    <View style={styles.contentLayout}>


    <View style={styles.table}>
     
        <View style={styles.body}>
          <View style={styles.td}>
            <Text>Goods</Text>
          </View>
          <View style={styles.td}>
            <Text>Price</Text>
          </View>
          <View style={styles.td}>
            <Text>Volume</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.tl}>
            <Text>Kangkung</Text>
          </View>
          <View style={styles.tr}>
            <Text>RM 1.50</Text>
          </View>
          <View style={styles.te}>
            <Text>70 KG</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.tl}>
            <Text>Carrot</Text>
          </View>
          <View style={styles.tr}>
            <Text>RM 3.00</Text>
          </View>
          <View style={styles.te}>
            <Text>70 KG</Text>
          </View>
        </View>
      </View>
     
 
    <View style={styles.footer}>

      <TouchableOpacity onPress={()=>navigation.navigate('Market')} >
        <View style={styles.buttonFooter} >
        <Text>go to market {`>`} </Text>
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
    backgroundColor: '#AE0D7A',
    height: '100%',
    flexDirection: 'column',
    padding: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  td: {
    padding: 5,
    borderBottomColor: 'black',
    borderWidth: 1,
    margin: 20,
    width: 100,
    alignItems: 'center',
  },
  tr: {
    padding: 5,
    alignItems: 'center',
    margin: 20,
    width: 100,
  },
  tl: {
    padding: 5,
    alignItems: 'flex-start',
    margin: 20,
    width: 100,
  },
  te: {
    padding: 5,
    alignItems: 'flex-end',
    margin: 20,
    width: 100,
  },
  footer: {
    flex: 8,
    alignItems : 'flex-end',
    backgroundColor: '#AE0D7A',
  },
  buttonFooter :{
    padding : 10
  }
});
