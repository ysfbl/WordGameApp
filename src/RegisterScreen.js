import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '', // Hata mesajını saklamak için bir state ekleyin
      successMessage: '', // Başarılı mesajı saklamak için bir state ekleyin
    };
  }

  handleRegister = () => {
    const { email, password } = this.state;

    // Firebase Authentication kullanarak kayıt olma işlemi
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Kayıt işlemi başarılı oldu
        console.log('Kullanıcı başarıyla kaydedildi:', userCredential.user);
        // Kayıttan sonra istenilen yönlendirmeyi yapabilirsiniz
        this.setState({ successMessage: 'Kayıt başarıyla oluşturuldu.', errorMessage: '' });
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        // Kayıt işlemi sırasında bir hata oluştu
        console.error('Kayıt hatası:', error);
        // Hata mesajını kullanıcıya göstermek için state'i güncelleyin
        this.setState({ errorMessage: error.message, successMessage: '' });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register Screen</Text>

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
        
        <Button title="Register" onPress={this.handleRegister} />

        {this.state.successMessage ? <Text style={styles.success}>{this.state.successMessage}</Text> : null}
        {this.state.errorMessage ? <Text style={styles.error}>{this.state.errorMessage}</Text> : null}
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
  success: {
    marginTop: 10,
    color: 'green',
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
});

export default RegisterScreen;
