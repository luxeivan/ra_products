import React from 'react'
import './CardsView.css'

export default function CardsView(props) {
    const { products } = props
    return (
        <div className='product-card'>
            <ul className='product-card__list'>
                {products.map((item,index) => <li className='product-card__item' key={index}>
                    <h2 className='product-card__name'>{item.name}</h2>
                    <p className='product-card__color'>{item.color}</p>
                    <div className='product-card__imagearea'> <img className='product-card__image' src={item.img} alt="" /></div>
                    <div className='product-card__row'>
                        <p className='product-card__price'>${item.price}</p>
                        <button className='product-card__button'>Add to cart</button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}
