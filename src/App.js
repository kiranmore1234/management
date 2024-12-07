import Navbar from './Component/Navbar/Navbar';
import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add_client from './Component/Pages/Add_client.jsx';
import View_Client from './Component/Pages/View_Client.jsx';
import Edit from './Component/Pages/View_Client.jsx'
import Delete form './Component/Pages/Delete.jsx'
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
              <Navbar/>
              <Routes>               
                   <Route path='/add_client' element={<Add_Client/>}></Route>
                   <Route path='view_client' element={<View_Client/>}></Route>
                   <Route path='/edit' element={<Edit/>}></Route>
                   <Route path='/delete' element={<Delete/>}></Route>
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
