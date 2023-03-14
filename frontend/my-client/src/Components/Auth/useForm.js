import React, { useState, useEffect } from 'react';

export const useForm = (validate) => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
        user_name: "",
        user_password: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = e => {
        const { name, values } = e.target
        setValues({
            ...values,
            [name]: values
        });
    };
    const handleSumbit = e =>{
        e.preventDefault();
        console.log('button hit')
        setErrors(validate(values));
    };

    return { handleChange, values, handleSumbit,errors };
};

export default useForm;
