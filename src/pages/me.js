import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button } from '@ant-design/react-native'
class Me extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: 'me'
    }
    render () {
        return (
            <Button type='ghost' title="反击" onPress={() => this.props.navigation.navigate('Search') }>我是wo页面</Button>
            // <Text onPress={() => this.props.navigation.navigate('Users')}>
            // </Text>
        )
    }
}
export default Me