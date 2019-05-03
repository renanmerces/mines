import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Flag from './Flag'

export default props =>{
    return ( <View style={styles.container}>
        <View style={styles.menu}>
            <TouchableOpacity onPress={props.onFlagPress}>
                <Flag bigger style={styles.flag}></Flag>
            </TouchableOpacity>                   
            <Text style={styles.flagText}> = {props.flagsLeft}</Text>
        </View>
        
        <TouchableOpacity onPress={props.onNewGame}><Text>Novo Jogo</Text></TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    menu:{
        flexDirection: 'row',
    },    
    flag:{
        marginBottom: 5
    },
    flagText:{
        marginLeft: 30,
        fontSize: 20
    }
})