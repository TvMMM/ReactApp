import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props){
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return (
    <div >
        <div className="back-to-home">
            <Link to="/">Back to Homepage</Link>
        </div>       
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        <h4>{product.continent}</h4>
                    </li>
                    <li>
                        {product.rating} Starts 
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                    <li>
                        <b>${product.price}</b>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Add to Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )  
}

export default ProductScreen;