import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import section  from "../../img/section.png"
import div  from "../../img/div (1).png"

const All = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://dummyjson.com/products';

        const fetchProducts = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setProducts(data.products);
        };

        fetchProducts();
    }, []);


    return (
        <div className="product">
            <div className="container">
                <div className="product__wrapper">
                    <div className='section__all'>
                        <img src={section} alt="" />
                    </div>
                    <div className='card__container'>
                        <h1 className='card__title'>Products List</h1>
                        <ul className='card__list'>
                            {products.map(product => (
                                <li className='card__item' key={product.id}>
                                    <NavLink to={`/single/${product.id}`}><img className='card__img' src={product.images[0]} alt={product.title} /></NavLink>
                                    <div className='card__content'>
                                        <h2 className='card__name'>{product.title}</h2>
                                        <p className='card__price'>Price: ${product.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <img className='dol' src={div} alt="" />
                </div>
            </div>
        </div>
    );
}

export default All