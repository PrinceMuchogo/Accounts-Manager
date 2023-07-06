import axios from 'axios';
import {React , useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {

    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();

    const handleMoreInfo = (account) => {
        navigate(
            '/moreInfo',
            {
            state: {
                account: account,
                accountId: account.id}
        })
    }

    const handleUpdateAccount = (Id) =>{
        navigate(
            '/update',
            {state: {accountId: Id}}
        );
    };

    useEffect(() =>{

        axios.get('http://localhost:5000/api/accounts/all')
        .then(res => {
            console.log(res.data.accountsArray);
            setAccounts(res.data.accountsArray);
        })
        .catch(err => console.log(err))

    }, []);

    const handleDeleteEvent = async (e, Id) =>{
        e.preventDefault();

        const confirmed = window.confirm(`Are you sure you want to delete account`);

        if(confirmed){

            axios.delete('http://localhost:5125/api/accounts/delete',{
                data: {"Id": Id}
            })
            .then(res =>{ 
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
        }
    };
    
  return (
    <div>

        {
            accounts?
            <div>
            <h6 style={{textAlign: 'center', paddingBottom: '20px'}}>Accounts</h6>
        <div className='table-responsive'>
            <table class="table table-striped table-bordered table-hover"  style={{width: '100%'}}>
                <thead style={{textAlign: 'center', fontWeight: 'light'}}>
                    <th>First name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>Account Type</th>
                    <th>Account Number</th>
                    <th>Account Status</th>
                    <th colSpan={3}>More Information</th>
                </thead>
                <tbody style={{textAlign: 'center'}}>

                    {
                        
                        accounts.map((account) =>(
                            
                            <tr style={{height: '2vh'}}>
                                <td>{account.firstname}</td>
                                <td>{account.lastname}</td>
                                <td>{account.mobileNumber}</td>
                                <td>{account.accountType}</td>
                                <td>{account.accountNumber}</td>
                                <td>{account.accountStatus}</td>
                                <td>
                                        <button onClick={(e) => handleMoreInfo(account)} class="btn btn-sm btn-primary" style={{width: '100%'}}>
                                            More Info
                                        </button>
                                </td>
                                <td>
                                    
                                        <button onClick={() => handleUpdateAccount(account.id)} class="btn btn-sm btn-primary" style={{width: '100%'}}>
                                            Update Account
                                        </button>
                                    
                                </td>
                                <td>
                                        <button onClick={(e) => handleDeleteEvent(e, account.id)} class="btn btn-sm btn-primary" style={{width: '100%'}}>
                                            Delete Account
                                        </button>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
        :
        <p>No Accounts to display</p>
        }
        
    </div>
  );
};

export default Table;