import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
        <ScrollView className="flex-1 bg-black px-4 py-6">
      <View className="mb-6 items-center">
        <Text className="text-3xl font-bold text-white">Library Dashboard</Text>
        <Text className="text-gray-400 text-center mt-1">
          Welcome back! Explore your library and manage books efficiently.
        </Text>
      </View>

      <View className="flex-row flex-wrap justify-between mb-6">
        <TouchableOpacity className="w-[48%] mb-4 bg-blue-600 rounded-xl py-4 items-center">
          <Text className="text-white font-semibold text-lg">Browse Books</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[48%] mb-4 bg-green-600 rounded-xl py-4 items-center">
          <Text className="text-white font-semibold text-lg">Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[48%] mb-4 bg-purple-600 rounded-xl py-4 items-center">
          <Text className="text-white font-semibold text-lg">Search Books</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-[48%] mb-4 bg-yellow-500 rounded-xl py-4 items-center">
          <Text className="text-white font-semibold text-lg">Reading Progress</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-white text-2xl font-bold mb-4">Your Stats</Text>
      <View className="flex-row flex-wrap justify-between mb-6">
        <View className="w-[48%] mb-4 bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-bold text-2xl text-center">12</Text>
          <Text className="text-gray-400 text-center mt-1">Books Reading</Text>
        </View>
        <View className="w-[48%] mb-4 bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-bold text-2xl text-center">34</Text>
          <Text className="text-gray-400 text-center mt-1">Books Completed</Text>
        </View>
        <View className="w-[48%] mb-4 bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-bold text-2xl text-center">7</Text>
          <Text className="text-gray-400 text-center mt-1">Favorites</Text>
        </View>
        <View className="w-[48%] mb-4 bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-bold text-2xl text-center">3</Text>
          <Text className="text-gray-400 text-center mt-1">New Arrivals</Text>
        </View>
      </View>

      <Text className="text-white text-2xl font-bold mb-4">Features</Text>
      <View className="flex flex-col gap-4 mb-6">
        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-semibold text-lg">Mark Favorite Books</Text>
          <Text className="text-gray-300 mt-1 text-sm">
            Quickly access your favorite books and series.
          </Text>
        </View>
        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-semibold text-lg">Filter & Genres</Text>
          <Text className="text-gray-300 mt-1 text-sm">
            Search books by genre, author, or status.
          </Text>
        </View>
        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4">
          <Text className="text-white font-semibold text-lg">Track Reading Progress</Text>
          <Text className="text-gray-300 mt-1 text-sm">
            Continue reading exactly where you left off.
          </Text>
        </View>
      </View>
    <View className='flex  items-center'>
         <TouchableOpacity
          onPress={handleLogout}
          className="mt-4 px-4 py-2 bg-red-600 rounded-lg"
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}