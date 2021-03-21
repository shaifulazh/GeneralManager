import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ContentDisplay from './ContentDisplay';
import FooterDisplay from './FooterDisplay';
import TopDisplayMenu from './TopDisplayMenu';
// import ContentDisplay from './src/ContentDisplay'
// import FooterDisplay from './src/FooterDisplay'
// import TopDisplayMenu from './src/TopDisplayMenu'

export default function MainDisplay({navigation}) {
  const [groupMenu, setGroupMenu] = useState(0);
  const [pressAction, setPressAction] = useState('');
  const menuFlex = selectMenu(groupMenu);
  const [activeMenu, setActiveMenu] = useState('MARKET');
  const menuBackgroundColor = 'blue'
  console.log(activeMenu)
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={[menuFlex.upflex, {backgroundColor: 'white'}]}>
        <TopDisplayMenu
          groupMenu={groupMenu}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}

          
        />
      </View>
      <View style={{flex: 80, backgroundColor: 'white'}}>
        <ContentDisplay pressAction={pressAction} navigation={navigation} />
      </View>
      <View style={[menuFlex.downflex, {backgroundColor: 'white'}]}>
        <FooterDisplay
          groupMenu={groupMenu}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}

          
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flex20: {
    flex: 20,
  },
  flex10: {
    flex: 10,
  },

  flex15: {
    flex: 15,
  },
  flex5: {
    flex: 5,
  },
  flex0: {
    flex: 0,
  },
});

const marketOrderSaleFlex = {
  upflex: styles.flex20,
  downflex: styles.flex0,
};

const stockManningSupplyFlex = {
  upflex: styles.flex15,
  downflex: styles.flex5,
};

const todoScheduleReminderFlex = {
  upflex: styles.flex10,
  downflex: styles.flex10,
};

const BorrowLendExpenseFlex = {
  upflex: styles.flex5,
  downflex: styles.flex15,
};

const selectMenu = (groupMenu) => {
  switch (groupMenu) {
    case 0:
      return marketOrderSaleFlex;
    case 1:
      return stockManningSupplyFlex;
    case 2:
      return todoScheduleReminderFlex;
    case 3:
      return BorrowLendExpenseFlex;

    default:
      return marketOrderSaleFlex;
  }
};
