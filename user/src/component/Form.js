import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';



function UserForm({errors, touched, values, status}){
    //getting status from props
const[users, setUsers] = useState([]);
console.log('Users', users);

useEffect(()=> {
    //in the case status comes undentified
    if(status){
        setUsers([...users, status]);
    }
    }, [status]);

// get status from props

   
    return(
        <>
        <h1>Form Component</h1> 
        <div className="forminput">
        <Form>
            <Field
            type="text"
            name="name"
            placeholder="name"
            />
            {touched.name && errors.name && (<span className="error">{errors.name}</span>)}
             <Field
            type="text"
            name="email"
            placeholder="email"
            />
            {touched.email && errors.email && (<span className="error">{errors.email}</span>)}

            <Field
            type="text"
            name="password"
            placeholder="password"
            />
            {touched.password && errors.password && (<span className="error">{errors.password}</span>)}

            <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
            {touched.tos && errors.tos && (<span className="error">{errors.tos}</span>)}

          <button type="submit">Submit</button>
        </Form>
        
        {users.map(user => (
        <p key={user.id}>{user.name}</p>
        ))}
        </div>
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

    //get setStatus
    handleSubmit(values, {setStatus, resetForm}){
        
        console.log(values);
        //form submission HTTP request

        axios
        .post(`https://reqres.in/api/users`, values)
        .then(res=> {
            console.log('Set Status Area')
            resetForm();
            setStatus(res.data)
        })
        .catch(err => console.log(err) )
    }
 })(UserForm)

export default FormikForm;
