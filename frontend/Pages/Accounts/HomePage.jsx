import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'; 

//action to be dispatched when checkout event is triggered
import { logout } from '../../src/slices/userAuthSlice';

//custom component to render accounts information in a table
import Table from '../../Components/Table';

//functional component for the admin dashboard
const HomePage = () => {

  //hooks to extract current user state and to navigate the app
  const {userInfo} = useSelector((state) => state.userAuth);
  const navigate = useNavigate();

  // routing authentication
  if(userInfo != null){

    return (
      <div style={{margin: '6%'}}>
        
        <div>
            <Link to={'/createAccount'}>
                <button class="btn btn-sm btn-primary"  >
                    Create new account
                </button>
            </Link>
        </div>
        
        <Table/>
      </div>
    )
  }else{

    //redirecting to admin login page
    useEffect(() =>{
      navigate('/Login');
    })
    
  }

  
}

export default HomePage