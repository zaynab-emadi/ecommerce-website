import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {
    AdminLogin,
    AdminPanel, Cart, Category, CustomerInfo,
    Dashboard,
    IntroPage,
    Orders, OrderSubmit, PageNotFound, PaymentResult,
    ProductDetail,
    ProductsList,
    Stock
} from "../pages/pagesIndex";

function RoutesIndex() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />}>
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/category/:categoryName" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orderSubmit" element={<OrderSubmit />} />
              <Route path="/customerInfo" element={<CustomerInfo />} />
              <Route path="/paymentResult" element={<PaymentResult />} />
            </Route>
            <Route path="/loginAdmin" element={<AdminLogin />} />
            <Route path="/adminPanel" element={<AdminPanel />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="productsList" element={<ProductsList />} />
              <Route path="stock" element={<Stock />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default RoutesIndex;
