import React, { useState, useEffect } from 'react';
import "./Product.css"
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [t] = useTranslation();

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
                    <div className='card__container'>
                        <h1 className='card__title'>{t("List")}</h1>
                        <ul className='card__list'>
                            {products.map(product => (
                                <li className='card__item' key={product.id}>
                                    <NavLink to={`/single/${product.id}`}><img className='card__img' src={product.images[0]} alt={product.title} /></NavLink>
                                    <div className='card__content'>
                                        <h2 className='card__name'>{product.title}</h2>
                                    </div>
                                </li>
                            )).slice(0, 6)}
                        </ul>
                    </div>
                    <NavLink to={"/all"}>{t("see")}</NavLink>

                </div>
            </div>
        </div>
    );
}

export default Product