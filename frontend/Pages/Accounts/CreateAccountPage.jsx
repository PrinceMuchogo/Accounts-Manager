import axios from 'axios';
import React, { useState } from 'react';

const CreateAccountPage = () => {

    //using hook to manage the state of form values before sending http request
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [verified, setVerified] = useState('');
    const [notified, setNotified] = useState('');
    const [isSent, setIsSent] = useState('');
    const [accountStatus, setAccountStatus] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const [collectionPoint, setCollectionPoint] = useState('');
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [sourceOfFunds, setSourceOfFunds] = useState('');
    const [address, setAddress] = useState('');
    

    //arrow function to handle the form submit and send an http put request using axios
    const handleSubmitForm = async(e) =>{

        //using the method to prevent default behaviour of the event
        e.preventDefault();
        
        //confirming the change
        const confirmed = window.confirm(`Creating new account`);

        if(confirmed){

            axios
                .post('http://localhost:5125/api/accounts/create',{
                "_id": accountId,
                "firstName": firstName,
                "lastName": lastName,
                "mobileNumber": mobileNumber,
                "gender": gender,
                "verified": verified ,
                "notified": notified,
                "isSent": isSent,
                "status": accountStatus,
                "accountNumber": accountNumber,
                "accountType": accountType,
                "collectionPoint": collectionPoint,
                "identificationNumber": identificationNumber,
                "sourceOfFunds": sourceOfFunds,
                "address": address
                })

                .then(res =>{
                    console.log(res);
                    window.location.reload();
                    toast.success('Account updated successfully', {
                        style: {
                          backgroundColor: '#1E40AF',
                          color: '#fff',
                          borderRadius: '2px',
                        },
                      });
                })
                .catch(err => console.log(err));
        };
    };

  return (
    <div style={{marginTop: '6%'}}>
        <h5 style={{ maxWidth: "40%", margin: "0 auto" }}>
            Create New Account
        </h5>
        <div style={{ maxWidth: "40%", margin: "0 auto", marginTop: '3%' }}>
            <form onSubmit={(e) =>handleSubmitForm(e)} >
                <div class="form-group">
                    <label for="first-name">
                        Firstname
                    </label>
                    <input 
                        type="text" 
                        rows="3" 
                        class="form-control" 
                        id="task-name" 
                        required={true}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name">
                    </input>
                </div>
                <div class="form-group">
                    <label for="last name">
                        Last name
                    </label>
                    <input
                        type="text" 
                        class="form-control" 
                        id="last name" 
                        required={true}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value.trim())}
                        rows="3" 
                        placeholder="Enter last name">
                    </input>
                </div>
                <div class="form-group">
                    <label for="mobile-number">
                        Mobile Number
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="mobile-number" 
                        required={true}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.trim())}
                        rows="3" 
                        placeholder="Enter mobile number">
                    </input>
                </div>
                <div class="form-group">
                    <label for="gender">
                        Gender
                    </label>
                    <select
                        class="form-control" 
                        id="gender" 
                        required={true}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ID">
                        Identification Number
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="ID" 
                        required={true}
                        value={identificationNumber}
                        onChange={(e) => setIdentificationNumber(e.target.value.trim())}
                        rows="3" 
                        placeholder="Enter identification number">
                    </input>
                </div>
                <div class="form-group">
                    <label for="ID">
                        Address
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="address" 
                        required={true}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows="3" 
                        placeholder="Enter address">
                    </input>
                </div>
                <div class="form-group">
                    <label for="ID">
                        Account Verified
                    </label>
                    <select 
                        class="form-control" 
                        id="verified" 
                        required={true}
                        value={verified}
                        onChange={(e) => setVerified(e.target.value)}
                    >
                        <option value="">Select option</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="account-number">
                        Account Number
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="account-number" 
                        required={true}
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value.trim())}
                        rows="3" 
                        placeholder="Enter account number">
                    </input>
                </div>
                <div class="form-group">
                    <label for="account-type">
                        Account Type
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="account-type" 
                        required={true}
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value.trim())}
                        rows="3" 
                        placeholder="Enter account type">
                    </input>
                </div>
                <div class="form-group">
                    <label for="ID">
                        Account sent
                    </label>
                    <select 
                        class="form-control" 
                        id="is-sent"
                        required={true} 
                        value={isSent}
                        onChange={(e) => setIsSent(e.target.value)}
                    >
                        <option value="">Select option</option>
                        <option value={true}>Sent</option>
                        <option value={false}>Not sent</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="notified">
                        Notified
                    </label>
                    <select
                        class="form-control"
                        id="notified"
                        required={true}
                        value={notified}
                        onChange={(e) => setNotified(e.target.value)}
                    >
                        <option value="">Select option</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="status">
                        Account Status
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="status" 
                        required={true}
                        value={accountStatus}
                        onChange={(e) => setAccountStatus(e.target.value)}
                        rows="3" 
                        placeholder="Enter account status">
                    </input>
                </div>
                <div class="form-group">
                    <label for="income-source">
                        Source of income
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="income-source" 
                        required={true}
                        value={sourceOfFunds}
                        onChange={(e) => setSourceOfFunds(e.target.value)}
                        rows="3" 
                        placeholder="Enter source of income">
                    </input>
                </div>
                <div class="form-group">
                    <label for="collection-point">
                        Collection Point
                    </label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="collection-point" 
                        required={true}
                        value={collectionPoint}
                        onChange={(e) => setCollectionPoint(e.target.value.trim())}
                        rows="3" 
                        placeholder="Enter identification number">
                    </input>
                </div>
                <button type="submit" class="btn btn-primary" style={{marginTop: '2%'}}>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default CreateAccountPage