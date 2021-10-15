// imports
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'
import * as yup from 'yup';

import Home from './components/Home'
import OrderForms from "./components/Order-Forms";

// initialFormValues
const initialFormValues = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  onion: false,
  olives: false,
  tomatoes: false,
  cheese: false,
  special: ''
}

// initialFormErrors
const initialFormErrors = {
  name: '',
  pizzaSize: ''
}

// initialDisabled
const initialDisabled = true;

// const
const App = () => {
  

    useEffect(() => {
//       axios.post('https://reqres.in/api/orders', )
//         .then(res => {
//           console.log(res.data);
//         })
//         .catch(err => {
//           console.error(err);
})

    //     })
    // }, [])
  
return (
    <>
    {/* <div className='OrderForms'> */}
      <Route path="/pizza"> 
        <OrderForms />
      </Route>
  {/* </div> */}
  {/* <div className='Home'> */}
        <Route exact path="/">
          <Home />
        </Route>
      {/* </div> */}
      </>
  );
};
export default App;
