import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      // Retrieve user data from AsyncStorage
      const storedUserData = await AsyncStorage.getItem('userData');
      if (!storedUserData) {
        Alert.alert('Error', 'User not found. Please register first.');
        return;
      }

      const userData = JSON.parse(storedUserData);

      // Check if email and password match stored user data
      if (email === userData.email && password === userData.password) {
      // Navigate to UserData screen after successful login
        navigation.navigate('UserData');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Username"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={{ borderRadius: 10, overflow: 'hidden', }}>
        <View style={{ backgroundColor:'#672dde', padding: 10, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', }}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
