import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
// import { createContext } from 'react';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import Shipment from './components/Shipment/Shipment';








function App() {
  // const user = {name: 'Kodu Mia', email: 'habijabi@google.com'}
  return (
    <div>
    <AuthContextProvider>
      

        <Header />

        <Router>

          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>

            <Route path="/shop">
              <Shop />
            </Route>

            <Route path="/review">
              <Review />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/inventory">
              <Inventory />
            </Route>


            <Route path="/product/:productKey">
              <ProductDetails />
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>

        </AuthContextProvider>

   






    </div>
  );
}

export default App;
