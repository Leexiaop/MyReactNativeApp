import React, { Component } from 'react'
import { Text, Button } from 'react-native'
class Me extends Component {
    constructor() {
        super()
    }
    static navigationOptions = {
        title: 'me'
    }
    render () {
        return (
            // <Button title="反击" onPress={() => this.props.navigation.navigate('Search') }>我是wo页面</Button>
            <Text onPress={() => this.props.navigation.navigate('Details')}>dddddddddd</Text>
        )
    }
}
export default Me