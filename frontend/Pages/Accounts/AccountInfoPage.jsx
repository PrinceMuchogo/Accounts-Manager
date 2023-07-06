import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AccountInfoPage = () => {

    const location = useLocation();
    const account = location.state.account;

  return (
    <div style={{marginTop:'6%', marginLeft:'2%', marginRight: '2%'}}>
        <h6>Account Information</h6>
        <div className='requests'>
            

                    <div class="card" style={{width: '50%', marginLeft: '20%'}}>
                        <div class="card-body">
                            <h5 class="card-title">
                                {account.firstname} {account.lastname}
                            </h5>
                            <p class="card-text">
                                <h6>Phone number:  </h6>{account.mobileNumber}
                            </p>
                            <p class="card-text">
                                <h6>ID: </h6>{account.identificationNumber}
                            </p>
                            <p class="card-text">
                                <h6>Gender:</h6> {account.gender}
                            </p>
                            <p class="card-text">
                                <h6>Address:</h6> {account.address}
                            </p>
                            <p class="card-text">
                                <h6>Source Of Funds:</h6> {account.sourceOfFunds}
                            </p>
                            <p class="card-text">
                                <h6>Account Number:</h6>{account.accountNumber}
                            </p>
                            <p class="card-text">
                                <h5>Account Type:</h5> {account.accountType}
                            </p>
                            <p class="card-text">
                                <h6>Account Status:</h6> {account.status}
                            </p>
                            <p class="card-text">
                                <h6>Account Sent:</h6> {account.isSent?
                                <p>Yes</p>
                                :
                                <p>No</p>}
                            </p>
                            <p class="card-text">
                                <h6>Account Verified:</h6> {
                                    account.verified?
                                    <p>Yes</p>
                                    :
                                    <p>No</p>
                                }
                            </p>
                            <p class="card-text">
                                <h6>Collection Point:</h6> {account.collectionPoint}
                            </p>
                            <p class="card-text">
                                <h6>Notified:</h6> {
                                    account.notified?
                                    <p>Yes</p>
                                    :
                                    <p>No</p>}
                            </p>
                            
                            
                        </div>
                    </div>
                
        </div>
        
    </div>
  )
}

export default AccountInfoPage