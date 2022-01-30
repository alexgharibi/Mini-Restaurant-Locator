import React from "react";
import SearchBar from "../components/SearchBar";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
