import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      if (!email.trim() || !password.trim()) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      const response = await axios.post("https://backend-8o4k.onrender.com/api/auth/login", {
        email,
        password,
      });

      console.log(response.data);
      router.push("/dashboard");
    } catch (err) {
      setError('Invalid credentials or server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-black px-4 py-16 justify-center">
      <View className="items-center mb-8">
        <Text className="text-3xl font-bold text-white mb-2">Welcome Back</Text>
        <Text className="text-gray-400 text-center">
          Sign in to manage your library account
        </Text>
      </View>

      {error && <Text className="text-red-400 text-center mb-4">{error}</Text>}

      <View className="bg-gray-900 border border-gray-700 rounded-xl p-6">
        <Text className="text-gray-300 mb-1">Email</Text>
        <TextInput
          className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 mb-4"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text className="text-gray-300 mb-1">Password</Text>
        <View className="relative mb-4">
          <TextInput
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700"
            placeholder="••••••••"
            secureTextEntry={!showPw}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPw(s => !s)}
            className="absolute right-2 top-2"
          >
            <Text className="text-gray-400">{showPw ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className="bg-blue-600 py-3 rounded mt-2 disabled:opacity-50"
        >
          <Text className="text-white font-semibold text-center">
            {loading ? "Signing in…" : "Sign In"}
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
