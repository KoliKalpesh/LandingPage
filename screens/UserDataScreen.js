import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const UserDataScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Retrieve user data from AsyncStorage
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleLogout = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const demoProfilePicture = 'https://via.placeholder.com/150';
  const demoDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum pretium feugiat.';

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Image
              source={{ uri: userData?.profilePicture || demoProfilePicture }}
              style={{ width: 100, height: 100, borderRadius: 50, marginRight: 20 }}
            />
            <View>
              <Text style={{ fontSize: 18 }}>{userData?.fullName}</Text>
              <Text style={{ fontSize: 16, color: 'gray' }}>{userData?.email}</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{userData?.description || demoDescription}</Text>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity onPress={handleLogout} style={{ borderRadius: 10, overflow: 'hidden' }}>
            <View style={{ backgroundColor: 'red', padding: 10, alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDataScreen;
