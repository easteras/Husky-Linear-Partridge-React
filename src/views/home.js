import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Husky Linear Partridge</title>
        <meta property="og:title" content="Husky Linear Partridge" />
      </Helmet>
      <img alt="image" src="/5435344-300w.jpg" className="home-image" />
    </div>
  )
}

export default Home
