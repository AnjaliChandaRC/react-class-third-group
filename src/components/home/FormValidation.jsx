import React, { useState } from 'react'
import swal from 'sweetalert';

const FormValidation = () => {

    const fromData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const [value, setValue] = useState(fromData)
    const [error, setError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setError(true)
        if (
            value.name !== "" &&
            value.email !== "" &&
            value.password !== "" &&
            value.confirmPassword !== ""
        ) {
            setValue(fromData)
            setError(false)
            swal({
                title: "Form Submitted",
                icon: "warning",
                dangerMode: true,
            })
        }
    }
    return (
        <div>
            <form action="">
                <div>
                    <input type="text" placeholder='Name' onChange={(e) => setValue({ ...value, name: e.target.value })} value={value.name} />
                    <p className='mb-0 text-danger'>{error && value.name === "" ? "Name is required" : ""}</p>
                </div>
                <div>
                    <input type="email" placeholder='Email' onChange={(e) => setValue({ ...value, email: e.target.value })} value={value.email} />
                    <p className='mb-0 text-danger'>{error && value.email === "" ? "Email is required" : ""}</p>
                </div>
                <div>
                    <input type="password" placeholder='Password' onChange={(e) => setValue({ ...value, password: e.target.value })} value={value.password} />
                    <p className='mb-0 text-danger'>{error && value.password === "" ? "Password is required" : ""}</p>
                </div>
                <div>
                    <input type="password" placeholder='Confirm Password' onChange={(e) => setValue({ ...value, confirmPassword: e.target.value })} value={value.confirmPassword} />
                    <p className='mb-0 text-danger'>{error && value.confirmPassword === "" ? "Confirm Password is required" : ""}</p>
                </div>
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation