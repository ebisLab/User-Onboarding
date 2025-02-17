import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';



function UserForm({errors, touched, values}){
const[users, setUsers] = useState([]);
   
    return(
        <>
        <h1>Form Component</h1> 
        
        <Form>
            <Field
            type="text"
            name="name"
            placeholder="name"
            />
            {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
             <Field
            type="text"
            name="email"
            placeholder="email"
            />
            {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

            <Field
            type="text"
            name="password"
            placeholder="password"
            />
            {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

            <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
            {touched.tos && errors.tos && (<p className="error">{errors.tos}</p>)}

          <button type="submit">Submit</button>
        </Form>
        
        {users.map(folk => <p>{folk}</p>)}
        </>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({name, email, password}, tos){
        return{
            name: name || '', 
            email: email || '',
            password: password || '',
            tos: tos || '',
        }
    }, 

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Hold on hommie!'),
        email: Yup.string().required('Hold on hommie!'),
        password: Yup.string().required('Hold on hommie!'),
        tos: Yup.string().required('Hold on hommie!'),
    }),

    handleSubmit(values, {setStatus}){
        
        console.log(values);
        //form submission HTTP request

        axios
        .post(`https://reqres.in/api/users`, values)
        .then(res=> {setStatus({users: res.data})})
        .catch(err => console.log(err) )
    }
 })(UserForm)

export default FormikForm;
