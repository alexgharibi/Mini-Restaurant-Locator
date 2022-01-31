import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
