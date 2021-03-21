import React from 'react';
import {View, Text} from 'react-native';
import BorrowDisplay from './Display/BorrowDisplay';
import ExpensesDisplay from './Display/ExpensesDisplay';
import LendDisplay from './Display/LendDisplay';
import Manning from './Display/Manning';
import MarketDisplay from './Display/MarketDisplay';
import OrderDisplay from './Display/OrderDisplay';
import ReminderDisplay from './Display/ReminderDisplay';
import SaleDisplay from './Display/SaleDisplay';
import ScheduleDisplay from './Display/ScheduleDisplay';
import StockDisplay from './Display/StockDisplay';
import SupplyDisplay from './Display/SupplyDisplay';
import ToDo from './Display/ToDo';

export default function ContentDisplay({pressAction, navigation}) {
  if (pressAction === 'ORDER') {
    return <OrderDisplay navigation={navigation} />;
  }

  if (pressAction === 'SALE') {
    return <SaleDisplay navigation={navigation} />;
  }

  if (pressAction === 'STOCK') {
    return <StockDisplay navigation={navigation} />;
  }

  if (pressAction === 'MANNING') {
    return <Manning navigation={navigation} />;
  }

  if (pressAction === 'SUPPLY') {
    return <SupplyDisplay navigation={navigation} />;
  }

  if (pressAction === 'TO DO') {
    return <ToDo navigation={navigation} />;
  }
  if (pressAction === 'SCHEDULE') {
    return <ScheduleDisplay navigation={navigation} />;
  }
  if (pressAction === 'REMINDER') {
    return <ReminderDisplay navigation={navigation} />;
  }

  if (pressAction === 'BORROW') {
    return <BorrowDisplay navigation={navigation} />;
  }

  if (pressAction === 'LEND') {
    return <LendDisplay navigation={navigation} />;
  }

  if (pressAction === 'EXPENSES') {
    return <ExpensesDisplay navigation={navigation} />;
  }

  return <MarketDisplay navigation={navigation} />;
}
