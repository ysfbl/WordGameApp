import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class Selection1 extends Component {
  handleGameSelection = (length) => {
    this.props.navigation.navigate(`LobbyScreen1`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="4 Harfli Oyun"
          onPress={() => this.handleGameSelection(4)}
          color="#6495ED"
          style={styles.button}
        />
        <View style={styles.separator}></View>
        <Button
          title="5 Harfli Oyun"
          onPress={() => this.handleGameSelection(5)}
          color="#4682B4"
          style={styles.button}
        />
        <View style={styles.separator}></View>
        <Button
          title="6 Harfli Oyun"
          onPress={() => this.handleGameSelection(6)}
          color="#4169E1"
          style={styles.button}
        />
        <View style={styles.separator}></View>
        <Button
          title="7 Harfli Oyun"
          onPress={() => this.handleGameSelection(7)}
          color="#1E90FF"
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  button: {
    marginBottom: 10,
  },
  separator: {
    marginVertical: 5,
  },
});

export default Selection1;
