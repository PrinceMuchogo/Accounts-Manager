import React from 'react'
import { LinkContainer,Link } from 'react-router-bootstrap';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

//hook to dispatch actions
import { useDispatch, useSelector } from 'react-redux';

// action to be dispatched when the signout button is clicked
import { logout } from '../src/slices/userAuthSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //hook to extract user info from current state
  const {userInfo} = useSelector((state) => state.userAuth);

  const handleRedirect = () =>{

    navigate(-1);

  };
  const handleViewProfile = () =>{

    navigate('/profile',{
      state: {user: userInfo}
    });
  };

  const handleSignOut = () =>{

    dispatch(logout());
    navigate('/');
    toast.success('Please call again', {
      style: {
        backgroundColor: '#1E40AF',
        color: '#fff',
        borderRadius: '2px',
      },
    });
  }

  return (
    <div>
       <Navbar className="navbar fixed-top navbar-dark bg-danger" expand="sm">
          <LinkContainer to='/home'>
              <NavbarBrand >
                
                    <h6 style={{marginLeft: '40%'}}>My App</h6>
                
              </NavbarBrand>
          </LinkContainer>
          {
              userInfo &&
              <>
                  <h5 style={{marginLeft: '40%'}}>
                      Dashboard
                  </h5>
                  <button onClick={handleViewProfile} class="btn btn-primary" style={{marginLeft: '17%'}}>Profile</button>
                  <button onClick={handleSignOut} class='btn btn-warning' style={{marginLeft: '2%'}}>SignOut</button>
              </>
          }
          
          <button onClick={handleRedirect} class='btn btn-warning' style={{marginLeft: '2%'}}>Back</button>
          <NavbarToggle/>
       </Navbar>
    </div>
  )
}

export default Header