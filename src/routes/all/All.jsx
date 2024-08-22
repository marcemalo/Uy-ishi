import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import section  from "../../img/section.png"
import div  from "../../img/div (1).png"
import "../product/Product.css"

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
                    <img className='kilisas' src={section} alt="" />
                    <div className='card__container'>
                        <ul className='card__listy'>
                            {products.map(product => (
                                <li className='card__items' key={product.id}>
                                    <NavLink to={`/single/${product.id}`}><img className='card__img' src={product.images[0]} alt={product.title} /></NavLink>
                                </li>
                            )).slice(0, 28)}
                        </ul>
                    </div>
                    <img className='dol' src={div} alt="" /> 
                </div>
            </div>
        </div>

    );
}

export default All