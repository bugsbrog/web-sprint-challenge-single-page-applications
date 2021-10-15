// imports
import React from 'react';

// export default
export default function Person(props) {
// props
    const { details } = props;

// return
    return (
        <div id='pizza-form'>
            <h4>{details.customerName}</h4>
            <p>{details.pizzaSauce}</p>
            <p>{details.pizzaSize}</p>
            <p>{details.pepperoni}</p>
            <p>{details.cheese}</p>
            <p>{details.sausage}</p>
            <p>{details.onion}</p>
            <p>{details.special}</p>
        </div>
    )
}