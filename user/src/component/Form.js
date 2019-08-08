import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik, Formik} from 'formik';
import * as Yup from 'yup';



function UserForm(){

   
    return(
        <>
        <h1>Form Component</h1> 
        
        <Form>
            <Field
            type="text"
            name="name"
            placeholder="name"
            />
        </Form>
        
        
        </>
    )
}

const FormikForm = withFormik({
    // mapPropsToValues({name}){
    //     return{
    //         name: name || ''
    //     }
    // }, 

    // validationSchema: Yup.object().shape({
    //     name: Yup.string().required('Hold on hommie!')
    // }),

    // handleSubmit(values, {setStatus}){
        
    //     console.log(values);
    //     //form submission HTTP request

    //     axios
    //     .post(`https://reqres.in/api/users`)
    // }
 })(UserForm)

export default FormikForm;
