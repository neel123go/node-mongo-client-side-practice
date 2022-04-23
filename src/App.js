import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manageproduct' element={<ManageProduct></ManageProduct>}></Route>
        <Route path='/updateproduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
