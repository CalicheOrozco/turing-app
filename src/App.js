import './App.css';

import Profile from './components/Profile'
// import {Link, BrowserRouter} from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";
import NavbarComp from './components/NavbarComp';
import NavbarCompOut from './components/NavbarCompOut';
import Oficial from './components/Oficial';
import FileUploadComponent from './components/fileUploadComponent';


function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) return <h1>Cargando.....</h1>
  return (
    <div className="App ">
      {isAuthenticated ?
      <div className='container-fluid bg-dark'>
        <NavbarCompOut />
      </div>
        

        :
        <div className='container-fluid bg-dark'>
        <NavbarComp />
      </div>
      }
      
      <div className="container d-flex justify-content-center align-items-center">
      
      
      
      
      {/* <Profile /> */}
      <Oficial>
          <FileUploadComponent />
        </Oficial>
      
      

      </div>
      
    </div>
  );
}

export default App;
