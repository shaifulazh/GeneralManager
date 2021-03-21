import React from 'react'
import { View, Text } from 'react-native'
import MarketDisplay from './Display/MarketDisplay'
import OrderDisplay from './Display/OrderDisplay'

export default function ContentDisplay({pressAction}) {


    if (pressAction === 'MARKET')
    {
        return <MarketDisplay />
    }

    if (pressAction === 'ORDER')
    {
        return  <OrderDisplay />
    }


    return (
        <View>



            <MarketDisplay />
        </View>
    )
}
