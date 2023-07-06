import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUpPage = () => {


    //using hook to manage the state of form values before sending http request
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    
    //use hook to redirect to the login page after signup
    const navigate = useNavigate();

    //arrow function to handle the form submit and send an http put request using axios
    const handleSubmitForm = async(e) =>{

        //using the method to prevent default behaviour of the event
        e.preventDefault();
    
            if(password != confirmPassword){
                toast.error('Passwords do not match', {
                    style: {
                      backgroundColor: '#1E40AF',
                      color: '#fff',
                      borderRadius: '2px',
                    },
                  })
            }else {

                axios
                .post('http://localhost:5000/api/users/register',{
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password
                })

                .then(res =>{
                    console.log(res);
                    window.location.reload();
                    navigate('/Login')
                })
                .catch(err => console.log(err));

            }

            
    };

  return (
    <div style={{marginTop: '6%'}}>
        <h3 style={{ maxWidth: "40%", margin: "0 auto" }}>
            Sign Up
        </h3>
        <div style={{ maxWidth: "40%", margin: "0 auto", marginTop:'3%' }}>
            <form onSubmit={(e) =>handleSubmitForm(e)} >
                <div class="form-group">
                    <label for="first-name">
                        Firstname
                    </label>
                    <input 
                        type="text" 
                        rows="3" 
                        class="form-control" 
                        id="firstname" 
                        value={firstName}
                        required={true}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name">
                    </input>
                </div>
                <div class="form-group">
                    <label for="lastname">
                        Lastname
                    </label>
                    <input 
                        class="form-control" 
                        id="lastname" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value.trim())}
                        rows="3" 
                        required={true}
                        placeholder="Enter lastname">
                    </input>
                </div>
                <div class="form-group">
                    <label for="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                        rows="3" 
                        required={true}
                        placeholder="Enter email">
                    </input>
                </div>
                <div class="form-group">
                    <label for="password">
                        Password
                    </label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                        rows="3" 
                        required={true}
                        placeholder="Enter password">
                    </input>
                </div>
                <div class="form-group">
                    <label for="confirm-password">
                        Confirm Password
                    </label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="confirm-password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value.trim())}
                        rows="3" 
                        required={true}
                        placeholder="Re-enter password">
                    </input>
                </div>
                <button type="submit" class="btn btn-primary" style={{marginTop: '3%'}}>Signup</button>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage
