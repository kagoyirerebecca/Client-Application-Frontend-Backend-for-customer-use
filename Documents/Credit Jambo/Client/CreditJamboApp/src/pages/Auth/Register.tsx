import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { register } from '../../services/authService';
import Toast from 'react-native-toast-message';

export const Register = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const deviceId = 'DEVICE-UUID-HERE';
      await register({ name, email, password, deviceId });
      Toast.show({ type: 'success', text1: 'Registration successful' });
      navigation.replace('Login');
    } catch (error: any) {
      Toast.show({ type: 'error', text1: error.response?.data?.message || 'Registration failed' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credit Jambo Register</Text>
      <Input label="Name" value={name} onChangeText={setName} placeholder="Enter your name" />
      <Input label="Email" value={email} onChangeText={setEmail} placeholder="Enter email" />
      <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});
