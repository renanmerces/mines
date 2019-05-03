import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {
    
    const flagPole = [styles.flagpole]
    const flag = [styles.flag]
    const base1 = [styles.base1]
    const base2 = [styles.base2]

    if(props.bigger){
        flagPole.push(styles.flagpoleBigger)
        flag.push(styles.flagBigger)
        base1.push(styles.base1Bigger)
        base2.push(styles.base2Bigger)
    }

    return(
    <View style={styles.container}>
        <View style={flagPole}></View>
        <View style={flag}></View>
        <View style={base1}></View>
        <View style={base2}></View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        marginTop: 2
    },
    flagpole: {
        position: 'absolute',
        width: 3,
        height: 18,
        backgroundColor: 'brown',
        marginLeft: 10
    },
    flag: {
        position: 'absolute',
        width: 10,
        height: 7,
        marginLeft: 10,
        backgroundColor: 'red'        
    },
    base1: {
        position: 'absolute',
        width: 8,
        height: 3,
        backgroundColor: 'brown',
        marginLeft: 9,
        marginTop: 18
    },
    base2: {
        position: 'absolute',
        width: 12,
        height: 3,
        backgroundColor: 'brown',
        marginLeft: 7,
        marginTop: 21
    },
    flagpoleBigger: {
        width: 6,
        height: 30,
        marginLeft: 10,
    },
    flagBigger: {
        width: 20,
        height: 18,
        marginLeft: 10,
    },
    base1Bigger: {
        width: 18,
        height: 4,
        marginLeft: 8,
        marginTop: 30
    },
    base2Bigger: {
        width: 22,
        height: 4,
        marginLeft: 6,
        marginTop: 34
    }
})
