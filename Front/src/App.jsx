import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/Auth/Login'
import SignupPage from './components/Auth/Signup'
import Loading from './components/Loader/Loading'
import Navbar from './components/Navbar/Navbar'

const Home = lazy(() => import("./components/Home/Home"))
const Cart = lazy(() => import("./components/Cart/Cart"))
const Search = lazy(() => import("./components/search/Search"))

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App