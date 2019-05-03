import React from 'react'
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default props => {
    
    const {opened, mined, nearMines, exploded, flagged} = props
     
    const fieldStyle = [styles.field]

    if(opened) fieldStyle.push(styles.opened)
    if(exploded) fieldStyle.push(styles.exploded)
    if(fieldStyle.length === 1) fieldStyle.push(styles.regular)

    let color = null
    if(nearMines > 0){
        if(nearMines == 1) color = 'green'
        else if(nearMines == 2) color = 'yellow'
        else if(nearMines >= 3 && nearMines < 6) color = 'orange'
        else color = 'red'
    }
    
    return(        
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onFlag}>
            <View style={fieldStyle}>
                { opened && nearMines > 0 && !mined ?
                    <Text style={[styles.label, {color: color}]}>{nearMines}</Text> : false
                }
                { opened && mined ?
                    <Mine></Mine> : false
                }
                
                { flagged && !opened?
                    <Flag></Flag> : false
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderWidth,
    },
    regular: {
        backgroundColor: '#999',
        borderTopColor: '#333',
        borderLeftColor: '#333',
        borderBottomColor: '#CCC',
        borderRightColor: '#CCC',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label:{
        fontSize: params.fontSize,
    },
    exploded:{
        backgroundColor: 'red'
    }
    
})