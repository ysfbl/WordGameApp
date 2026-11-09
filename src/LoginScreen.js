import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig'; 

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '', // Hata mesajını saklamak için bir state ekleyin
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Giriş işlemi başarılı oldu
        console.log('Kullanıcı başarıyla giriş yaptı:', userCredential.user);
        // Girişten sonra istenilen yönlendirmeyi yapabilirsiniz
        this.setState({ errorMessage: '' });
        this.props.navigation.navigate('GameSelection');
      })
      .catch((error) => {
        // Giriş işlemi sırasında bir hata oluştu
        console.error('Giriş hatası:', error);
        // Hata mesajını kullanıcıya göstermek için state'i güncelleyin
        this.setState({ errorMessage: error.message });
      });
  };

  handleRegisterLink = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true}
        />

        <Button title="Login" onPress={this.handleLogin} />

        {this.state.errorMessage ? (
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        ) : null}

        <Text style={styles.registerText}>
          Hesabınız yok mu?{' '}
          <Text style={styles.registerLink} onPress={this.handleRegisterLink}>
            Hemen kaydolun
          </Text>
        </Text>
        
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
    backgroundColor: '#f0f8ff', // Lavender renk
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6a5acd', // Slate Blue renk
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff', // Beyaz renk
  },
  registerText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#808080', // Gri renk
  },
  registerLink: {
    color: '#4169e1', // Royal Blue renk
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
