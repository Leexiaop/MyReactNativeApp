import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
class BackButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View style={styles.text}>
                <Text>返回</Text>
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
export default BackButton;