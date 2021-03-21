import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import TripleMenu from './MenuTop/TripleMenu';

export default function TopDisplayMenu({
  groupMenu,
  setPressAction,
  setGroupMenu,
  activeMenu,
  setActiveMenu,
}) {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      {groupMenu < 4 ? (
        <TripleMenu
          first={'BORROW'}
          middle={'LEND'}
          last={'EXPENSES'}
          group={3}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      ) : null}
      {groupMenu < 3 ? (
        <TripleMenu
          first={'TO DO'}
          middle={'SCHEDULE'}
          last={'REMINDER'}
          group={2}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      ) : null}
      {groupMenu < 2 ? (
        <TripleMenu
          first={'STOCK'}
          middle={'MANNING'}
          last={'SUPPLY'}
          group={1}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      ) : null}
      {groupMenu < 1 ? (
        <TripleMenu
          first={'MARKET'}
          middle={'ORDER'}
          last={'SALE'}
          group={0}
          setPressAction={setPressAction}
          setGroupMenu={setGroupMenu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      ) : null}
    </View>
  );
}
