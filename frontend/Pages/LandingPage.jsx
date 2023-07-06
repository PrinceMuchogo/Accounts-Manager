import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import { Container } from 'react-bootstrap';
import '../styles/landingPage.css';

const LandingPage = () => {
  return (
    <div className='landing'>
        <Container style={{marginTop: '1%', marginLeft: '35%',  maxWidth: '50%',height:'10cm', padding:'10%', color: 'black'}}>
            <h6>Welcome to My App</h6>

            <div>
                <div style={{marginBottom: '3%'}}>
                    <LinkContainer to='/Login'>
                        <button className='btn btn-warning'  >
                            Signin
                        </button>
                    </LinkContainer>
                </div>
                <div style={{marginBottom: '3%'}}>
                    <LinkContainer to='/Signup'>
                        <button className='btn btn-danger' >
                            Signup
                        </button>
                    </LinkContainer>
                </div>
            </div>
            
        </Container>
        
    </div>
  )
}

export default LandingPage