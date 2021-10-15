// import
import * as yup from 'yup';

const schema = yup.object().shape({
    customerName: yup
        .string()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    pizzaSauce: yup
        .string(),
    pizzaSize: yup
        .string()
        .required("Pizza size is required!"),
    special: yup
        .string(),
    pepperoni: yup.boolean(),
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
})

export default schema;