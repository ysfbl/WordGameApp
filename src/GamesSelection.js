import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class GameSelection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Oyun 1"
          onPress={() => {
            // Oyun 1 butonuna basıldığında Selection1 sayfasına yönlendir
            this.props.navigation.navigate('Selection1');
          }}
        />
        <Text style={styles.buttonDescription}>Rastgele Harf Sabiti Üretilen</Text>
        <View style={styles.separator}></View>
        <Button
          title="Oyun 2"
          onPress={() => {
            // Oyun 2 butonuna basıldığında işlenecek olaylar buraya gelecek
            // Örneğin, Oyun 2'ye özgü bir navigasyon işlemi gerçekleştirilebilir
            this.props.navigation.navigate('Selection2');
          }}
        />
        <Text style={styles.buttonDescription}>Harf Sabiti Kısıtlaması Olmadan Oyuncudan Direkt Kelime İstenen</Text>
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
  },
  buttonDescription: {
    marginTop: 10,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '80%',
  },
});

export default GameSelection;
