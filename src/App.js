// imports
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'
import * as yup from 'yup';
import Pizza from './components/Pizza'

import Home from './components/Home'
import OrderForms from "./components/OrderForms";
import schema from "./components/Schema";

const initialFormVals = {
  customerName: '',
  pizzaSauce: '',
  pizzaSize: '',
  pepperoni: false,
  cheese: false,
  sausage: false,
  onion: false,
  special: '',
}

const initialFormErrors = {
  customerName: '',
  pizzaSize: '',
}

const initialPizza = []
const initialDisabled = true

// const
const App = () => {

  const [pizza, setPizza] = useState(initialPizza)
  const [formVals, setFormVals] = useState(initialFormVals)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

    const postNewPizza = (newPizza) => {
      axios.post('https://reqres.in/api/orders', newPizza)
        .then(res => {
          //  console.log(res.data);
          setPizza([ res.data, ...pizza ])
        })
        .catch(err => {
          console.error(err);
    }).finally(() => setFormVals(initialFormVals))
  }

// validate
    const validate = (name, value) => {
      yup.reach(schema, name)
        .validate(value)
        .then (() => setFormErrors({ ...formErrors, [name]: ""}))
        .catch (err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

     // inputChange
  const inputChange = (name, value) => {
    validate(name, value);
    setFormVals({ ...formVals, [name]: value })
  }

  // updateForm
  const updateForm = (inputName, inputValue) => {
    setFormVals({ ...formVals, [inputName]: inputValue })
    }

    // submitForm
  const formSubmit = () => {
    const newPizza = {
      customerName: formVals.customerName.trim(),
      pizzaSize: formVals.pizzaSize,
      special: formVals.special.trim(),
    }

    // setFormVals and postNewPizza
    setFormVals(initialFormVals);
    postNewPizza(newPizza)
  }

  // useEffect
  useEffect(() => {
    // .isValid
        schema.isValid(formVals).then(valid => setDisabled(!valid))
      }, [formVals])
  
// return
return (
    <div className='App'>
    {/* Route path */}
      <Route path="/pizza">
          <OrderForms
            formVals={formVals}
            change={inputChange}
            updateForm={updateForm}
            submit={formSubmit}
            errors={formErrors}
            disabled={!formVals.pizzaSize && !formVals.pizzaSauce ? true : false}
            />
          </Route>
          {pizza.map(pizza => {
            return (
              <Pizza key={pizza.id} details={pizza} />
            )
         })}
          {/* Route path */}
          <Route exact path="/">
            <Home />
          </Route>
      </div>
  );
};

// export default
export default App;
