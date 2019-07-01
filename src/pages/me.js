import React, { Component } from 'react'
import { Text, Button } from 'react-native'
export default class Me extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: '我的'
    }
    render () {
        return (
            <Button title="反击" onPress={() => this.props.navigation.navigate('Search') }>我是wo页面</Button>
        )
    }
}