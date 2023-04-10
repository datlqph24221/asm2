// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user/UserLayout'
import AdminLayout from './components/layout/admin/AdminLayout'
import HomePage from './pages/userpage/homepage'
import AdminHomepage from './pages/adminpage/homepage'
import ProductDetail from './components/product-detail'
import SignUp from './components/layout/login/signup'
import SignIn from './components/layout/login/signin'
import AddProduct from './pages/adminpage/add'
import UpdateProduct from './pages/adminpage/update'


// 1. Khai bao router

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='/' element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<AdminHomepage />} />
        <Route path='add' element={<AddProduct />} />
        <Route path='product/:id' element={<UpdateProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App