// app/Login.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const auth = useAuth();
  const contextLogin = auth ? auth.login : null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    if (!email) {
      Alert.alert("Validation Error", "Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Validation Error", "Enter a valid email address");
      return false;
    }
    if (!password) {
      Alert.alert("Validation Error", "Password is required");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Validation Error", "Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const res = await axios.post(
        "https://backend-8o4k.onrender.com/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = res.data;
      console.log("Login Response:", data);

      if (data.token) {
        await AsyncStorage.setItem("token", data.token);
      }

      if (contextLogin) {
        contextLogin({ ...data.data, token: data.token });
      }

      Alert.alert("Success", "Login successful!");
      router.push("/home");
    } catch (err) {
      const msg =
        err.response?.data?.message || err.message || "Login failed";
      Alert.alert("Login Error", msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-black items-center justify-center p-5">
      <Text className="text-white text-2xl font-bold mb-8">
        Library Management System
      </Text>

      <View className="w-full bg-neutral-900 p-6 rounded-2xl">
        <Text className="text-gray-300 text-sm">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
          className="bg-neutral-800 text-white px-3 py-2 rounded-lg mt-2"
        />

        <Text className="text-gray-300 text-sm mt-4">Password</Text>
        <View className="flex-row items-center">
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#888"
            secureTextEntry={!showPw}
            className="flex-1 bg-neutral-800 text-white px-3 py-2 rounded-lg mt-2"
          />
          <TouchableOpacity
            onPress={() => setShowPw((s) => !s)}
            className="ml-2 mt-2 px-2"
          >
            <Text className="text-blue-400 text-xs">
              {showPw ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={handleLogin}
          className={`bg-blue-600 py-3 rounded-lg mt-6 ${
            loading ? "opacity-60" : ""
          }`}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-center font-semibold">
              Sign In
            </Text>
          )}
        </TouchableOpacity>

        <Text className="text-gray-400 text-center mt-4">
          New here?{" "}
          <Text
            className="text-blue-400"
            onPress={() => router.push("/register")}
          >
            Create an account
          </Text>
        </Text>
      </View>
    </View>
  );
}