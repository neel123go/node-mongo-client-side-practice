import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import ManageProduct from './components/ManageProduct/ManageProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manageproduct' element={<ManageProduct></ManageProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
