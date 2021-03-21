import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import TripleMenu from './MenuTop/TripleMenu';

export default function FooterDisplay({
  groupMenu,
  setPressAction,
  setGroupMenu,
  activeMenu,
  setActiveMenu,

}) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      {groupMenu > 2 ? (
        <TripleMenu
          first={'TO DO'}
          middle={'SCHEDULE'}
          last={'REMINDER'}
          group={2}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          menuBackgroundColorFirst='#59761E'
          menuBackgroundColorMiddle='#98CA32'
          menuBackgroundColorLast='#C0DF81'
          
        />
      ) : null}
      {groupMenu > 1 ? (
        <TripleMenu
          first={'STOCK'}
          middle={'MANNING'}
          last={'SUPPLY'}
          group={1}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          menuBackgroundColorFirst='#448D76'
          menuBackgroundColorMiddle='#79BEA8'
          menuBackgroundColorLast='#E7F3EF'
          
        />
      ) : null}
      {groupMenu > 0 ? (
        <TripleMenu
          first={'MARKET'}
          middle={'ORDER'}
          last={'SALE'}
          group={0}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          menuBackgroundColorFirst='#AE0D7A'
          menuBackgroundColorMiddle='#F033B4'
          menuBackgroundColorLast='#FDDDFC'
          
        />
      ) : null}
    </View>
  );
}
