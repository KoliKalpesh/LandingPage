import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome to Our App
      </Text>
      <View style={{ width: '100%', marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={[styles.button, styles.createAccountButton]}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={[styles.button, styles.loginButton]}
        >
          <Text style={styles.buttonText2}>Already Registered? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color:'#ddd0e7',
    
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2:{
    color:'black',

  },
  createAccountButton: {
    
    backgroundColor: '#672dde',
  },
  loginButton: {
  
    backgroundColor: '#ccbbfb',
  },
});

export default HomeScreen;
