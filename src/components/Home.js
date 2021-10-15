import React from 'react';
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import pizza from './Pizza.jpg'

export default function Home() {
    return (
        <>
            <nav>
                <Link to='/'>Home&nbsp;&nbsp;&nbsp;</Link>
                <Link to='/pizza'>Order</Link>
                </nav>
                <h1>Lambda Eats</h1>
                <div className='pizza-image'>
                    <img src={pizza} alt='pizza-pic' />
                    </div>
                <Link id="order-pizza" to="/pizza">
                    <button className='Order'>Order a Pizza</button>
                </Link>
        </>
    )

}