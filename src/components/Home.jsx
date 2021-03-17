import React from 'react'
import Product from './Product'

const Home = () => {
  const product = {
    id: 1,
    title:
      'SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter - 120MB/s, C10, U1, Full HD, A1, Micro SD Card - SDSQUA4-128G-GN6MA',
    price: 19.89,
    rating: 5,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81ti8lPxEjL._AC_SX355_.jpg',
  }
  return (
    <div className='home'>
      <img
        className='home__banner'
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
        alt='home banner'
      />

      <div className='home__row'>
        <Product {...product} />
        <Product {...product} />
      </div>
      <div className='home__row'>
        <Product {...product} />
        <Product {...product} />
        <Product {...product} />
      </div>
      <div className='home__row'>
        <Product {...product} />
        <Product {...product} />
      </div>
      <div className='home__row'>
        <Product {...product} />
      </div>
    </div>
  )
}

export default Home
