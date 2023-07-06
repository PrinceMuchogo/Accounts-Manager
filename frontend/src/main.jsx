import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';


import LandingPage from '../Pages/LandingPage.jsx';

//pages
import UpdateAccountPage from '../Pages/Accounts/UpdateAccountPage.jsx';
import LoginPage from '../Pages/Accounts/LoginPage.jsx';
import SignUpPage from '../Pages/SignupPage.jsx';
import HomePage from '../Pages/Accounts/HomePage.jsx';


//error handling not found page
import NotFoundPage from '../Pages/NotFoundPage';
import AccountInfoPage from '../Pages/Accounts/AccountInfoPage';
import CreateAccountPage from '../Pages/Accounts/CreateAccountPage';
import ViewMyProfilePage from '../Pages/ViewMyProfilePage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App />}>

          //landing page route
          <Route index={true} path='/' element={<LandingPage/>}></Route>

          //Login route
          <Route path='/Login' element={<LoginPage/>}></Route>

          //SignUp route
          <Route path='/Signup' element={<SignUpPage/>}></Route>

          //User route
          <Route path='/home' element={<HomePage/>}></Route>

          //view profile route
          <Route path='/profile' element={<ViewMyProfilePage/>}></Route>

          //Update account route
          <Route path='/update' element={<UpdateAccountPage/>}></Route>

          //Account Info route
          <Route path='/moreInfo' element={<AccountInfoPage/>}></Route>

          //Create Account route
          <Route path='/createAccount' element={<CreateAccountPage/>}></Route>
          
          //Not found page
          <Route path='*' element={<NotFoundPage/>}></Route>
    </Route>  
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
