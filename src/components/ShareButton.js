import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
class ShareButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Image source={require('../images/share-outline.png')} style={Style.img}></Image>
        )
    }
}
const Style = StyleSheet.create({
    img: {
        width: 32,
        height: 32
    }
})
export default ShareButton