// imports
import React, { useState } from 'react';

// export default
  export default function OrderForms(props) {
    
    // props
    const { formVals, change, submit, errors, disabled } = props;

    // evt.target and 'checkbox
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;

        // change and valueToUse
        change(name, valueToUse)
    }

    // .preventDefault()
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
        <div className='errors'>
            <div>{errors.customerName}</div>
            <div>{errors.pizzaSize}</div>
            <div>{errors.pizzaSauce}</div>
        </div>
        <div id='size-dropdown'>
            <label> Choice of Size:&nbsp;&nbsp; 
                <select
                    name='pizzaSize'
                    value={formVals.pizzaSize}
                    onChange={onChange}>
                    value={formVals.pizzaSize}
                        
                    {/* options */}
                    <option value=''> --Select a Size --</option>
                    <option value='Small'> Small </option>
                    <option value='Medium'> Medium </option>
                    <option value='Large'> Large</option>
                    <option value='X-Large'> X-Large </option>
                    </select>
                </label>
            </div>
            <div className='pizzaSauce'>
                <h4> Choice of Sauce </h4>
                <label> Original Red
                    <input
                        type='radio'
                        name="pizzaSauce"
                        onChange={onChange}
                        value={formVals.pizzaSauce}
                        />
                    </label>
                <label> Garlic Ranch
                    <input
                        type='radio'
                        name="pizzaSauce"
                        onChange={onChange}
                        value={formVals.pizzaSauce}
                        />
                    </label>
                    <label> BBQ Sauce
                    <input
                        type='radio'
                        name="pizzaSauce"
                        onChange={onChange}
                        value={formVals.pizzaSauce}
                        />
                    </label>
                    <label> Spinach Alfredo
                    <input
                        type='radio'
                        name="pizzaSauce"
                        onChange={onChange}
                        value={formVals.pizzaSauce}
                        />
                    </label>
                </div>
        <div className='Toppings'>
            <h4> Add Toppings </h4>
            <label> Pepperoni 
                <input
                    type='checkbox'
                    name="pepperoni"
                    checked={formVals.pepperoni}
                    onChange={onChange}
                    />
                </label>
            <label> Cheese
                <input
                    type='checkbox'
                    name="cheese"
                    checked={formVals.cheese}
                    onChange={onChange}
                    />
                </label>
            <label> Sausage 
                <input
                    type='checkbox'
                    name="sausage"
                    checked={formVals.sausage}
                    onChange={onChange}
                    />
                </label> 
            <label> Onion 
                <input
                    type='checkbox'
                    name="onion"
                    checked={formVals.onion}
                    onChange={onChange}
                    />
            </label>
                </div>
        <div id='special-text'>
            <label> Special Instructions :&nbsp;&nbsp;
                <input
                    type="text"
                    name="special"
                    value={formVals.special}
                    onChange={onChange}
                    placeholder="Anything else to add?"
                    />
                </label>
                    </div>
                 {/* name */}
        <div className='name'>
            <label> Customer name:&nbsp;&nbsp;
                <input
                    type="text"
                    id='name-input'
                    name="customerName"
                    value={formVals.customerName}
                    onChange={onChange}
                    placeholder="Enter a name"
                    />
            </label>
                <div className="submit">
                    <button id='submitBtn' disabled={disabled}>Add to Order</button>
        </div>
    </div>
</form>
    )
  }