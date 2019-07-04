import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
class ShareButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return(
            <View style={styles.text}>
                <Text>分享</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        paddingLeft: 16,
        paddingRight: 16
    }
})
export default ShareButton;