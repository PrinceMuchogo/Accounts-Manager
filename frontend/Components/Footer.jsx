import React from 'react';

const Footer = () => {
  return (
    <div>
        
        <nav className="navbar fixed-bottom navbar-light bg-danger" style={{height: '50px', fontWeight:'light', fontSize:'12px'}}>
            <div className="container-fluid">
                <p className="navbar-brand text-center p-3" style={{marginBottom: '10%'}} >© 2023 Copyright: My App</p>
            </div>
            
        </nav>
    </div>
  );
}

export default Footer