import React from 'react'
import {Text, StyleSheet, Modal, View, TouchableOpacity} from 'react-native'

export default props => {
    return (
    <Modal transparent={true} animationType='slide' visible={props.isVisible} onRequestClose={props.onCancel}>
        <View style={styles.frame}>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione o nível:</Text>
                <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => props.onLevelSelected(0.1)}>
                    <Text style={styles.buttonLevel}>Fácil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={() => props.onLevelSelected(0.2)}>
                    <Text style={styles.buttonLevel}>Médio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => props.onLevelSelected(0.3)}>
                    <Text style={styles.buttonLevel}>Difícil</Text>
                </TouchableOpacity>
            </View>
        </View>        
    </Modal>
    )}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button:{
        marginTop: 10,
        padding: 5
    },
    buttonLevel:{
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy:{
        backgroundColor: 'green'
    },
    bgNormal:{
        backgroundColor: 'blue'
    },
    bgHard:{
        backgroundColor: 'orange'
    },
})