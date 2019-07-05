import React, { Component } from 'react'
import { Text } from 'react-native'
class Search extends Component {
    constructor() {
        super()
    }
    // static navigationOptions = {
    //     title: '搜索'
    // }
    render () {
        return (
            <Text onPress={() => this.props.navigation.navigate('Me') }>我是搜索页面</Text>
        )
    }
}
export default Search