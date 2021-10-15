import React from 'react';
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom'

export default function Home() {
    return (
        <label>
            <nav>
                <Link id="order-pizza" to="/pizza">
                    <button className='Order'>Order a Pizza</button>
                </Link>
            </nav>
        </label>

    )

}