import React from 'react'
import './ListView.css'

export default function ListView(props) {
    const { products } = props
    return (
        <div className='product-list'>
            <ul className='product-list__list'>
                {products.map((item, index) => <li className='product-list__item' key={index}>
                    <div className='product-list__imagearea'> <img className='product-list__image' src={item.img} alt="" /></div>
                    <h2 className='product-list__name'>{item.name}</h2>
                    <p className='product-list__color'>{item.color}</p>
                    <p className='product-list__price'>${item.price}</p>
                    <button className='product-list__button'>Add to cart</button>
                </li>)}
            </ul>
        </div>
    )
}
