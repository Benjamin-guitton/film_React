import React, {useState} from 'react'
import { Form, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {


    const [user, setUser] = useState({
        login:"",
        password:""
    })

    const [error, setError] = useState(false)

    const submitForm = (e)=>{
        e.preventDefault()
        if(user.login === "admin" && user.password === "password"){
            navigate('/movies')
        }
        else{
            setError(true)
        }

    }

    let navigate = useNavigate();

    return (
        <div className='col-6 mt-5'>
            <Form className='col-6 m-auto'>
                <Input
                    type='text'
                    name='login'
                    placeholder='login'
                    onChange={(e)=>setUser({...user, login:e.target.value})}
                />

                <Input
                    type='password'
                    name='password'
                    className='my-3'
                    placeholder='password'
                    onChange={(e)=>setUser({...user, password:e.target.value})}
                />

                <Input
                    type='button'
                    value={'log in'}
                    onClick={submitForm}

                />
            </Form>
            <Link to={'/register'}>Register</Link>
            {error == true &&
                <div>
                    <h2>INCORRECT LOGIN OR PASSWORD</h2>
                </div>
            }
        </div>
    )
}

export default Login