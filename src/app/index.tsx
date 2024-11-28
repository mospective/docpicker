import { View, Text, ScrollView, SafeAreaView, Image, Button, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import * as DocumentPicker from 'expo-document-picker';

const App = () => {

  const pickDocument = async () => {
    console.log("picker was clicked");
    const result = await DocumentPicker.getDocumentAsync();
    console.log(result);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="h-full bg-primary"
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <View className="items-center justify-center h-full w-full px-8">

          <View>
            <Pressable onPress={pickDocument}>
              <Text>Pick a document</Text>
            </Pressable>
          </View>
         
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#05668D" style="light" />
    </SafeAreaView>
  )
}

export default App;