import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, flagField, flagsUsed } from './src/functions';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = this.createState()
  }
  
  minesAmount = () => Math.ceil(params.getColumnsAmount() * params.getRowsAmount() * params.difficultLevel)
  
  createState = () => {
    return {
      board: createMinedBoard(params.getRowsAmount(), params.getColumnsAmount(), this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelect: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost) {
      showMines(board)
      Alert.alert('Se fudeu', 'Tenta de novo, otário')
    }
    if(won) Alert.alert('Misere', 'Botou pra fuder. Parabéns!')

    this.setState({board, lost, won})

  }

  onFlagField = (row, column) => {
    const board = cloneBoard(this.state.board)
    flagField(board, row, column)
    const won = wonGame(board)

    if(won)  Alert.alert('Misere', 'Botou pra fuder. Parabéns!')
    this.setState({board, won})
  }

  onLevelSelect = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Bem-vindo ao Mines</Text> */}
        <LevelSelection isVisible={this.state.showLevelSelect}
          onLevelSelected={this.onLevelSelect} onCancel={() => this.setState({showLevelSelect: false})}
        ></LevelSelection> 
        <Header 
        flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
        onNewGame={() => this.setState(this.createState())} 
        onFlagPress={() => this.setState({showLevelSelect: true})}
        ></Header>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onFlagField={this.onFlagField}></MineField>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  board: {
    flexDirection: 'row',
    backgroundColor: '#AAA',
    justifyContent: 'center'
  },

});
