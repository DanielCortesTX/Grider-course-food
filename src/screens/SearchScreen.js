import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../compnents/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('Hi there!')
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'san jose',
          limit: 50
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage('Something went wrong')
    }
  }

  // searchApi('pasta')

  return (
    <View>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen