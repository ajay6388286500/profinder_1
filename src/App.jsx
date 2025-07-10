import './App.css'
import './style.css'
import './css/main.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Insights from './pages/Insights';
import MinimalLayout from './layout/MinimalLayout';
import Home from './pages/Home';
import RegisterPage from './layout/RegisterPage';
import ForgotPassword from './layout/ForgotPassword';
import MobileHeader from './layout/MobileHeader';
import MobileMenu from './layout/MobileMenu';
import AccountDashboard from './dashboard/AccountDashboard';
import ResetPassword from './layout/ResetPassword';
import CartPage from './dashboard/CartPage';
import WishlistPage from './dashboard/WishlistPage';
import CompareProducts from  './dashboard/CompareProducts';
import ShopPage from './shop/ShopPage';




function App() {

  return (
    <>

      <BrowserRouter basename="/">
        {/* <ToastContainer/> */}

        <Routes>
          <Route path="/" element={<MinimalLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="reset" element={<ResetPassword />} />

            {/* <Route path="header" element={<MobileHeader />} /> */}
            {/* <Route path="mobile" element={<MobileMenu />} /> */}
            <Route path="account" element={<AccountDashboard />} />




            {/* <Route path="signup" element={<SignupPage />} /> */}
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="Insights" element={<Insights />} />
            <Route path="dashboards/">
							<Route path="cart" element={<CartPage />} />
							<Route path="wishlist" element={<WishlistPage />} />
							<Route path="compare" element={<CompareProducts />} />
							<Route path="shop" element={<ShopPage />} />
					




							{/* <Route path="dashboard2" element={<Dashboard2Page />} />
							<Route path="dashboard3" element={<Dashboard3Page />} />
							<Route path="dashboard4" element={<Dashboard4Page />} />
							<Route path="dashboard5" element={<Dashboard5Page />} /> */}
						</Route>

          </Route>

          {/* <Route path="/" element={<MainLayout container={false} pb={false} />}>
						<Route path="pages/">
							<Route path="wip" element={<WIPPage />} />
						</Route>
					</Route> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
