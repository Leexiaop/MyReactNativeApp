import React, { Component } from 'react'
import { Text } from 'react-native'
export default class Search extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: '搜索',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
    render () {
        return (
            <Text onPress={() => this.props.navigation.navigate('Me') }>我是搜索页面</Text>
        )
    }
}