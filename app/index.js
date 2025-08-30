import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function WelcomePage() {
  const router = useRouter();
 
  const handleGetStarted = () => {
    router.push('/login');
  };
 
  return (
    <ScrollView className="flex-1 bg-black">
      {/* Hero Section */}
      <View className="px-6 mt-20 items-center">
        <Text className="text-4xl font-bold text-white text-center">
          Welcome to Library Hub
        </Text>
        <Text className="text-gray-300 text-center mt-2">
          Discover a world of knowledge at your fingertips.
        </Text>

        <TouchableOpacity
        onPress={handleGetStarted}
        activeOpacity={0.8}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg">
          <Text className="text-white font-semibold text-lg">Get Started {}</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-white text-2xl font-bold text-center mt-4 mb-2">
        Everything you need to read your books
      </Text>
      <Text className="text-gray-400 text-center mb-6">
        Well, everything you need if you aren’t that picky about minor details.
      </Text>

      <View className="flex flex-col md:flex-row flex-wrap justify-between gap-4">
        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 shadow w-full md:w-[48%] mb-4">
          <Text className="text-white font-semibold text-lg">
            Mark your favorite books
          </Text>
          <Text className="text-gray-300 mt-2 text-sm">
            Save and quickly access your favorite titles or series.
          </Text>
        </View>

        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 shadow w-full md:w-[48%] mb-4">
          <Text className="text-white font-semibold text-lg">Filter & genres</Text>
          <Text className="text-gray-300 mt-2 text-sm">
            Find titles by genre, status, author, and more.
          </Text>
        </View>

        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 shadow w-full md:w-[48%] mb-4">
          <Text className="text-white font-semibold text-lg">Advanced search</Text>
          <Text className="text-gray-300 mt-2 text-sm">
            Search by title, tags, or metadata quickly.
          </Text>
        </View>
        <View className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 shadow w-full md:w-[48%] mb-4">
          <Text className="text-white font-semibold text-lg">Reading progress</Text>
          <Text className="text-gray-300 mt-2 text-sm">
            Pick up right where you stopped.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

