import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <a href="index.html">ETravel</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign-in</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Continent</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Africa</a>
                    </li>
                    <li>
                        <a href="index.html">Europe</a>
                    </li>
                    <li>
                        <a href="index.html">Asia</a>
                    </li>
                    <li>
                        <a href="index.html">North America</a>
                    </li>
                    <li>
                        <a href="index.html">South America</a>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img className="product-image" src="https://picsum.photos/200/300" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Product product-name</a>
                                </div>
                                <div className="product-continent">Continent</div>
                                <div className="product-price">$</div>
                                <div className="product-rating">4.5 Star(10 Review)</div>
                            </div>
                        </li>

                        <li>
                            <div className="product">
                                <img className="product-image" src="https://picsum.photos/200/300" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Product product-name</a>
                                </div>
                                <div className="product-continent">Continent</div>
                                <div className="product-price">$</div>
                                <div className="product-rating">4.5 Star(10 Review)</div>
                            </div>
                        </li>

                        <li>
                            <div className="product">
                                <img className="product-image" src="https://picsum.photos/200/300" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Product product-name</a>
                                </div>
                                <div className="product-continent">Continent</div>
                                <div className="product-price">$</div>
                                <div className="product-rating">4.5 Star(10 Review)</div>
                            </div>
                        </li>

                        <li>
                            <div className="product">
                                <img className="product-image" src="https://picsum.photos/200/300" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Product product-name</a>
                                </div>
                                <div className="product-continent">Continent</div>
                                <div className="product-price">$</div>
                                <div className="product-rating">4.5 Star(10 Review)</div>
                            </div>
                        </li>

                        <li>
                            <div className="product">
                                <img className="product-image" src="https://picsum.photos/200/300" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Product product-name</a>
                                </div>
                                <div className="product-continent">Continent</div>
                                <div className="product-price">$</div>
                                <div className="product-rating">4.5 Star(10 Review)</div>
                            </div>
                        </li>

                        <li>
                            <div className="product">
                                <img className="product-image" src="https://picsum.photos/200/300" alt="product"/>
                                <div className="product-name">
                                    <a href="product.html">Product product-name</a>
                                </div>
                                <div className="product-continent">Continent</div>
                                <div className="product-price">$</div>
                                <div className="product-rating">4.5 Star(10 Review)</div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                
            </main>
            <footer className="footer">
                All right reserved.
            </footer>
        </div>
  );
}

export default App;
