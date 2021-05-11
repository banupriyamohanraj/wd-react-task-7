import { useContext, useState } from "react"
import UserContext from "./UserContext"
import { Field, Formik } from 'formik';
import { useFormik } from 'formik';

export default function UserCreate() {

    // let [firstname, setfirstname] = useState('')
    // let [lastname, setlastname] = useState('')
    // let [email, setemail] = useState('')
    // let [password, setpassword] = useState('')

    let userdata = useContext(UserContext)
    // let UserSubmit = async (e) => {
    //     e.preventDefault()

    //     userdata.setuserlist([...userdata.userlist, {
    //         firstname, lastname, email, password
    //     }])

    //     await fetch('https://6073d49a066e7e0017e785fb.mockapi.io/data', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             firstname, lastname, email, password
    //         }),
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     })


    // }

    let validate = (values) => {
        const errors = {};
        if (!values.firstname) {
            errors.firstname = 'Required';
        }
        if (!values.lastname) {
            errors.lastname = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            
            const firstname = values.firstname;
            const lastname = values.lastname;
            const email = values.email;
            const password = values.email;

            userdata.setuserlist([...userdata.userlist, values])
            fetch('https://6073d49a066e7e0017e785fb.mockapi.io/data', {
            method: "POST",
            body: JSON.stringify({
             firstname,lastname,email,password                                                    
            }),
            headers: {
                "content-type": "application/json"
            }
        })

        },
    });

    return (<>
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-12 p-0'>
                        <h3>User Creation Form</h3>
                    </div>
                </div>
                <div className='row'>

                    <div className='col-lg-6 p-0 mt-3'>
                        <label >First Name</label>
                        <input className='form-control' name="firstname" value={formik.values.firstname} onChange={formik.handleChange}></input>
                        {formik.errors.firstname ? <span style={{'color':'red'}}>First Name {formik.errors.firstname}</span> : null}
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <label >Last Name</label>
                        <input className='form-control' name="lastname" value={formik.values.lastname} onChange={formik.handleChange}></input>
                        {formik.errors.lastname ? <span style={{'color':'red'}}>Last Name {formik.errors.lastname}</span> : null}
                    </div>
                    <div className='col-lg-6 p-0 mt-3'>
                        <label >Email</label>
                        <input className='form-control' name="email" value={formik.values.email} onChange={formik.handleChange}></input>
                        {formik.errors.email ? <span style={{'color':'red'}}>Email {formik.errors.email}</span> : null}
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <label >Password</label>
                        <input className='form-control' name="password" value={formik.values.password} onChange={formik.handleChange}></input>
                        {formik.errors.password ? <span style={{'color':'red'}}>Password {formik.errors.password}</span> : null}
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 mt-3'>
                            <input type="submit" value="Submit" className='btn btn-primary' ></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>);
}