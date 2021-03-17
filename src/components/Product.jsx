import React from 'react'

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((r) => '⭐')}
        </div>
      </div>
      <img src={image} alt={title} />
      <button type='button' className='product__add-to-basket'>
        Add to Basket
      </button>
    </div>
  )
}

export default Product
