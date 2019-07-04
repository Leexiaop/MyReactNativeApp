import React, { Component } from 'react'
import { Text } from 'react-native'
export default class Search extends Component {
    constructor() {
        super()
    }

    render () {
        return (
            <Text onPress={() => this.props.navigation.navigate('Me') }>我是搜索页面</Text>
        )
    }
}