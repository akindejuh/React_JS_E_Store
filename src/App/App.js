import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute';
import ScrollToTheTop from '../Components/ScrollToTheTop/ScrollToTheTop';

import SignupPage from '../Pages/Auth/SignupPage/SignupPage';
import LoginPage from '../Pages/Auth/LoginPage/LoginPage';
import AppNav from '../Components/AppNav/AppNav';
import Footer from '../Components/Footer/Footer';
import SideNav from '../Components/SideNav/SideNav';

import HomePage from '../Pages/Routes/HomePage/HomePage';
import StoresPage from '../Pages/Routes/StoresPage/StoresPage';
import StoreCategoryPage from '../Pages/Routes/StoreCategoryPage/StoreCategoryPage';
import BestSellingPage from '../Pages/Routes/BestSellingPage/BestSellingPage';
import LimitedDealsPage from '../Pages/Routes/LimitedDealsPage/LimitedDealsPage';
import WalletPage from '../Pages/Routes/WalletPage/WalletPage';
import VCardPage from '../Pages/Routes/VCardPage/VCardPage';
import CourierPage from '../Pages/Routes/CourierPage/CourierPage';
import MissingPage from '../Pages/Routes/MissingPage/MissingPage';
import TransactionsPage from '../Pages/Routes/TransactionsPage/TransactionsPage';
import ChatsPage from '../Pages/Routes/ChatsPage/ChatsPage';
import SettingsPage from '../Pages/Routes/SettingsPage/SettingsPage';
import NotificationsPage from '../Pages/Routes/NotificationsPage/NotificationsPage';
import CartsPage from '../Pages/Routes/CartsPage/CartsPage';
import CouponsPage from '../Pages/Routes/CouponsPage/CouponsPage';
import OrdersPage from '../Pages/Routes/OrdersPage/OrdersPage';
import ParcelsPage from '../Pages/Routes/ParcelsPage/ParcelsPage';
import WishListPage from '../Pages/Routes/WishListPage/WishListPage';
import CheckoutPage from '../Pages/Routes/CheckoutPage/CheckoutPage';
import SendParcelPage from '../Pages/Routes/SendParcelPage/SendParcelPage';
import ParcelBillsAndLocPage from '../Pages/Routes/ParcelBillsAndLocPage/ParcelBillsAndLocPage';

import StoreDetsPage from '../Pages/Details/StoreDetsPage/StoreDetsPage';
import CourierDetsPage from '../Pages/Details/CourierDetsPage/CourierDetsPage';
import ProductDetsPage from '../Pages/Details/ProductDetsPage/ProductDetsPage';
import ProductDescPage from '../Pages/Routes/ProductDescPage/ProductDescPage';
import ChatsDetsPage from '../Pages/Details/ChatsDetsPage/ChatsDetsPage';

import KYCPage from '../Pages/Auth/KYCPage/KYCPage';
import KYCVerifyPage from '../Pages/Auth/KYCVerifyPage/KYCVerifyPage';
import KYCFinalPage from '../Pages/Auth/KYCFinalPage/KYCFinalPage';

import FundWalletPage from '../Pages/Wallet/FundWalletPage/FundWalletPage';
import SendMoneyPage from '../Pages/Wallet/SendMoneyPage/SendMoneyPage';
import SubscriptionPage from '../Pages/Wallet/SubscriptionPage/SubscriptionPage';
import AirtimePage from '../Pages/Wallet/AirtimePage/AirtimePage';
import BuyAirtimePage from '../Pages/Wallet/BuyAirtimePage/BuyAirtimePage';
import BillsPage from '../Pages/Wallet/BillsPage/BillsPage';
import WalletListPage from '../Pages/Wallet/WalletListPage/WalletListPage';

import { useDispatch, useSelector } from 'react-redux';
import { updatewidth } from '../Redux/Actions/UtilsActions';

const App = () => {
  const [showUserBar, setShowUserBar] = useState(false);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const scroll_page = useSelector(state => state.ScrollPage);
  const show_footer = useSelector(state => state.ShowFooter);
  const [showSideBar, setShowSideBar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const setwidth = () => {
      dispatch(updatewidth());
    }
    window.addEventListener('resize', setwidth);
    return () => window.removeEventListener('resize', setwidth);
  });

  return (
    <div className='app_main'>
      <BrowserRouter>
        <ScrollToTheTop />
        <SideNav
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          showUserBar={showUserBar}
          setShowUserBar={setShowUserBar}
          showFilterBar={showFilterBar}
          setShowFilterBar={setShowFilterBar}
        />
        <AppNav
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          showUserBar={showUserBar}
          setShowUserBar={setShowUserBar}
          showFilterBar={showFilterBar}
          setShowFilterBar={setShowFilterBar}
        />
        <div className='app_all_container' id={showSideBar ? 'app_all_container' : ''}>
          <div onClick={() => {
            if (showSideBar) {
              setShowSideBar(false);
            }
            if (showUserBar) {
              setShowUserBar(false);
            }
            if (showFilterBar) {
              setShowFilterBar(false);
            }
          }}
            className='app_body_footer_container'
            style={scroll_page ? { overflowY: "scroll" } : { overflowY: "hidden" }}>
            <div className='app_body_container'>
              <Routes>
                <Route path='/signup' element={<SignupPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='*' element={<MissingPage />}></Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/transactions'} />}>
                  <Route path='/transactions' element={<TransactionsPage />}></Route>
                </Route>

                <Route exact path='/' element={<HomePage />}></Route>
                <Route exact path='/stores' element={<StoresPage />}></Route>
                <Route path='/stores/category' element={<StoreCategoryPage />}></Route>
                <Route path='/stores/bestselling' element={<BestSellingPage />}></Route>
                <Route exact path='/stores/limiteddeals' element={<LimitedDealsPage />}></Route >
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet'} />}>
                  <Route exact path='/wallet' element={<WalletPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/vcard'} />}>
                  <Route exact path='/vcard' element={<VCardPage />}></Route>
                </Route>
                <Route exact path='/couriers' element={<CourierPage />}></Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/carts'} />}>
                  <Route exact path='/carts' element={<CartsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/orders'} />}>
                  <Route exact path='/orders' element={<OrdersPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/parcels'} />}>
                  <Route exact path='/parcels' element={<ParcelsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/parcels/send'} />}>
                  <Route exact path='/parcels/send' element={<SendParcelPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/parcels/billsandloc'} />}>
                  <Route exact path='/parcels/billsandloc' element={<ParcelBillsAndLocPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wishlist'} />}>
                  <Route exact path='/wishlist' element={<WishListPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/coupons'} />}>
                  <Route exact path='/coupons' element={<CouponsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/notifications'} />}>
                  <Route exact path='/notifications' element={<NotificationsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/chats'} />}>
                  <Route exact path='/chats' element={<ChatsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/settings'} />}>
                  <Route exact path='/settings' element={<SettingsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/checkout'} />}>
                  <Route exact path='/checkout' element={<CheckoutPage />}></Route>
                </Route>

                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/kyc'} />}>
                  <Route exact path='/kyc' element={<KYCPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/kyc/verify'} />}>
                  <Route exact path='/kyc/verify' element={<KYCVerifyPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/kyc/final'} />}>
                  <Route exact path='/kyc/final' element={<KYCFinalPage />}></Route>
                </Route>
                <Route path='/stores/:id' element={<StoreDetsPage />}></Route>
                <Route path='/couriers/:id' element={<CourierDetsPage />}></Route>
                <Route path='/products/:id' element={<ProductDetsPage />}></Route>
                <Route path='/products/:id/description' element={<ProductDescPage />}></Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/chats/:id'} />}>
                  <Route path='/chats/:id' element={<ChatsDetsPage />}></Route>
                </Route>

                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/fund'} />}>
                  <Route exact path='/wallet/fund' element={<FundWalletPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/send'} />}>
                  <Route exact path='/wallet/send' element={<SendMoneyPage />}></Route>
                </Route>

                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/subscription'} />}>
                  <Route exact path='/wallet/subscription' element={<SubscriptionPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/subscription/airtime'} />}>
                  <Route exact path='/wallet/subscription/airtime' element={<AirtimePage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/subscription/airtime/:id'} />}>
                  <Route exact path='/wallet/subscription/airtime/:id' element={<BuyAirtimePage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/subscription/data'} />}>
                  <Route exact path='/wallet/subscription/data' element={<WalletListPage title={'Data'} />}></Route>
                </Route>

                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/bills'} />}>
                  <Route exact path='/wallet/bills' element={<BillsPage />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/bills/electricity'} />}>
                  <Route exact path='/wallet/bills/electricity' element={<WalletListPage title={'Electricity'} />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/bills/cable'} />}>
                  <Route exact path='/wallet/bills/cable' element={<WalletListPage title={'Cable'} />}></Route>
                </Route>
                <Route element={<ProtectedRoute navigate={'/login'} outlet={'/wallet/bills/internet'} />}>
                  <Route exact path='/wallet/bills/internet' element={<WalletListPage title={'Internet'} />}></Route>
                </Route>
              </Routes>
            </div>
            {show_footer && <Footer />}
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
