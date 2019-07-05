import React, { Component } from 'react'
import { Text } from 'react-native'
class Order extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Text onPress={() => this.props.navigation.navigate('Message')}>我是订单页面</Text>
        )
    }
}
export default Order