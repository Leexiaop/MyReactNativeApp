import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
class BackButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Image source={require('../images/arrow-back-outline.png')} style={Style.img} onPress={() => this.props.navigation.navigate('Message')}></Image>
        )
    }
}
const Style = StyleSheet.create({
    img: {
        width: 32,
        height: 32
    }
})
export default BackButton