import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

class LobbyScreen1 extends Component {
  state = {
    players: [
      { id: 1, name: 'Ahmet' },
      { id: 2, name: 'Mehmet' },
      { id: 3, name: 'Ayşe' },
      { id: 4, name: 'Fatma' },
    ],
  };

  renderPlayerItem = ({ item }) => (
    <View style={styles.playerItem}>
      <Text style={styles.playerName}>{item.name}</Text>
      <Button title="Davet At" onPress={() => this.invitePlayer(item.id)} color="#4682B4" />
    </View>
  );

  invitePlayer = (playerId) => {
    // Davet atma işlemi
    console.log(`Davet atılan oyuncunun ID'si: ${playerId}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Oyun Lobi</Text>
        <FlatList
          data={this.state.players}
          renderItem={this.renderPlayerItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.playerList}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#4169e1', // Royal Blue
  },
  playerList: {
    width: '100%',
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  playerName: {
    fontSize: 18,
    color: '#333',
  },
});

export default LobbyScreen1;
