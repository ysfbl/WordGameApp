import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';

class WordGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(6).fill(Array(6).fill('')), // 5x5 boş bir matris oluştur
      selectedRow: null,
      selectedCol: null,
    };
  }

  handleCellPress = (row, col) => {
    this.setState({ selectedRow: row, selectedCol: col }, () => {
      this.textInput.focus(); // Seçilen hücreye odaklan
      Keyboard.dismiss(); // Klavyeyi gizle
    });
  };

  renderGrid = () => {
    return this.state.grid.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((col, colIndex) => (
          <TextInput
            key={colIndex}
            style={[styles.cell, this.isSelected(rowIndex, colIndex) && styles.selected]}
            value={this.state.grid[rowIndex][colIndex]}
            onChangeText={(text) => this.handleChangeText(text, rowIndex, colIndex)}
            onFocus={() => this.handleCellPress(rowIndex, colIndex)}
            ref={(input) => {
              if (rowIndex === this.state.selectedRow && colIndex === this.state.selectedCol) {
                this.textInput = input; // Seçilen hücreye odaklanan TextInput referansı
              }
            }}
          />
        ))}
      </View>
    ));
  };

  handleChangeText = (text, row, col) => {
    const updatedGrid = [...this.state.grid];
    updatedGrid[row][col] = text;
    this.setState({ grid: updatedGrid });
  };

  isSelected = (row, col) => {
    return this.state.selectedRow === row && this.state.selectedCol === col;
  };

  render() {
    return <View style={styles.container}>{this.renderGrid()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    margin: 2,
  },
  selected: {
    backgroundColor: 'yellow',
  },
});

export default WordGame;
