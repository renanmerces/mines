import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import Flag from './Flag'

export default props =>{
    return ( <View style={styles.container}>
        <View style={styles.menu}>
            <Button onPress={props.onFlagPress} title='Selecionar nível'></Button>
            {/* <TouchableOpacity onPress={props.onFlagPress}>
                <Flag bigger style={styles.flag}></Flag>
            </TouchableOpacity>                    */}
            <Flag bigger style={styles.flag}></Flag>
            <Text style={styles.flagText}> = {props.flagsLeft}</Text>
        </View>
        
        {/* <TouchableOpacity><Text>Novo jogo</Text></TouchableOpacity> */}
        <Button title='Novo Jogo' onPress={props.onNewGame}></Button>
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