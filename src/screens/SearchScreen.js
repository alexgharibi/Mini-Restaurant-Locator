import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { View, Text, StyleSheet } from "react-native";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>{results.length}</Text>
      <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
