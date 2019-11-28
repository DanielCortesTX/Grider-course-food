import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
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
  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage]
}