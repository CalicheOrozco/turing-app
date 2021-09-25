import './App.css';


// import {Link, BrowserRouter} from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";
import NavbarComp from './components/NavbarComp';
import NavbarCompOut from './components/NavbarCompOut';
import Oficial from './components/Oficial';
import FileUploadComponent from './components/FileUploadComponent';
import JsonRead from './components/JsonRead';
import Notification from './components/Notification';
import Operador from './components/Operador';
import Solicitudes from './Solicitudes';
import Respuestas from './Respuestas';
import SMS from './components/SMS';


function App() {
  const { isAuthenticated } = useAuth0();

  

    

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
      {/* <Oficial>
          <FileUploadComponent />
          <JsonRead/>
          <Notification/>
      </Oficial> */}

      <Operador>
          <FileUploadComponent />
          <Solicitudes/>
          <Respuestas/>
          <SMS/>
      </Operador>
        
      
      

      </div>
      
    </div>
  );
}

export default App;
