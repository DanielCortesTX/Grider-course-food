import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer d0wA6NYuWiNnQMMgCmP4FpZQODut69ME8FcyE8IaldAExm8AJCUXtiNd52NUZ6q-dNaSN73BXRrQ55ZYEN84GzUGy8RJTpHeceV_xo_Ep0L9o-OQu2rMXkxwivveXXYx'
  }
})

// yGr1XhhAuCgtl7kdkM8QWQ

// d0wA6NYuWiNnQMMgCmP4FpZQODut69ME8FcyE8IaldAExm8AJCUXtiNd52NUZ6q-dNaSN73BXRrQ55ZYEN84GzUGy8RJTpHeceV_xo_Ep0L9o-OQu2rMXkxwivveXXYx