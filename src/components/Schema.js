// import
import * as yup from 'yup';

const schema = yup.object().shape({
    customerName: yup
        .string()
        .required("name must be at least 2 characters"),
    pizzaSauce: yup
        .string()
        .required("Must choose a sauce!"),
    pizzaSize: yup
        .string()
        .required("Pizza size is required!"),
    special: yup
        .string(),
    pepperoni: yup.boolean()
        .oneOf([true]),
    sausage: yup.boolean()
        .oneOf([true]),
    onion: yup.boolean()
        .oneOf([true]),
    cheese: yup.boolean()
        .oneOf([true]),
})

export default schema;