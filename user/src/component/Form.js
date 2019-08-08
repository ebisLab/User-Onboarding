import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik, Formik} from 'formik';
import * as Yup from 'yup';

 const FormikForm = withFormik({
    mapPropsToValues({name}){
        return{
            name: name || ''
        }
    }

    // handleSubmit(values){
    //     console.log(values);
    // }
 })(UserForm)

export default function UserForm(){

   
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
