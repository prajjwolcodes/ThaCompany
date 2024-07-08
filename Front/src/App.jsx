import React, { lazy, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import bags from "./assets/images/products/Bags.jpg"
import Loading from './components/Loader/Loading'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './utils/ProtectedRoute'

const FeaturedProducts = lazy(() => import("./components/Home/FeaturedProducts"))
const LoginPage = lazy(() => import("./components/Auth/Login"))
const SignupPage = lazy(() => import("./components/Auth/Signup"))
const Home = lazy(() => import("./components/Home/Home"))
const Cart = lazy(() => import("./components/Cart/Cart"))
const Search = lazy(() => import("./components/search/Search"))
const Dashboard = lazy(() => import("./components/Admin/Dashboard"))

const App = () => {
  const user = useSelector((state) => state.auth.user)
  let routes;

  if (user?.role == "admin") {
    routes = (
      <React.Fragment>
        <Route path='/dashboard' element={<Dashboard />} />
      </React.Fragment>
    )

  }

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<FeaturedProducts
              image={bags}
              name="Sample Product"
              price="29.99"
            />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />

            {routes}
            {/* ADMIN ROUTES  */}
          </Routes>
          {/* <ProtectedRoute path='/dashboard' element={<Dashboard />} /> */}
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App