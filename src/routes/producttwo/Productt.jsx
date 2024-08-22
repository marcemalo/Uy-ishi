import React, { useState, useEffect } from 'react';
import "./pr.css"
    import { NavLink } from 'react-router-dom';

const Productt = () => {
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
                   <marquee behavior="" direction="">
                   <div className='card__container'>
                        <ul className='card__listt'>
                            {products.map(product => (
                                <li className='card__item' key={product.id}>
                                    <NavLink to={`/single/${product.id}`}><img className='card__img' src={product.images[0]} alt={product.title} /></NavLink>
                                    <div className='card__content'>
                                        <h2 className='card__name'>{product.title}</h2>
                                        <p className='card__price'>Price: ${product.price}</p>
                                    </div>
                                </li>
                            )).slice(0 ,10)}
                        </ul>
                    </div>
                   </marquee>
                    <NavLink to={"/all"}>SEE ALL</NavLink>

                </div>
            </div>
        </div>
    );
}

export default Productt