import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "ottawa",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("somthing went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={searchApi}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
