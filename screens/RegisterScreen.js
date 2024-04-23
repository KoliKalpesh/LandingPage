import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(false);

  const handleRegister = async () => {
    // Basic validation
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      // Save user data to AsyncStorage
      const userData = {
        fullName,
        phoneNumber,
        email,
        password,
        companyName,
        isAgency,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Navigate to UserData screen after successful registration
      navigation.navigate('UserData');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Create Your Account
      </Text>
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Email Address"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Company Name"
        value={companyName}
        onChangeText={text => setCompanyName(text)}
      />
      <Text style={{ marginBottom: 10 }}>Are you in an agency?</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => setIsAgency(true)}
          style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}
        >
          <View style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: isAgency ? 'green' : 'grey',
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {isAgency && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: 'green' }} />}
          </View>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsAgency(false)}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <View style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: !isAgency ? 'green' : 'grey',
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {!isAgency && <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: 'green' }} />}
          </View>
          <Text>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleRegister}
        style={{
          backgroundColor:'#672dde',
          paddingVertical: 15,
          borderRadius: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
