
import './index.css';
import React from 'react';
import {createRoutesFromElements,createBrowserRouter, RouterProvider,
  Route,} from "react-router-dom";
import Promotion from './components/promotion/Promotion';
import Delivery from './components/delivery/Delivery';
import Contacts from './components/contacts/Contacts';
import Cart from './components/cart/Cart';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/Home';
import PizzaMenu, {pizzaMenuLoader} from './components/home/pizzaMenu/PizzaMenu';
import SelectedPizza, {selectLoaderPizza} from './components/home/pizzaMenu/selected_pizza/SelectedPizza';
import RollsMenu, {rollsMenuLoader} from './components/home/rollsMenu/RollsMenu';
import SelectedRolls, {selectLoaderRolls} from './components/home/rollsMenu/selected_rolls/SelectedRolls';
import SetsMenu, {setsMenuLoader} from './components/home/setsMenu/SetsMenu';
import SelectedSets, {selectLoaderSets} from './components/home/setsMenu/selected_sets/SelectedSets';
import BeveragesMenu, {beveragesMenuLoader} from  './components/home/beveragesMenu/BeveragesMenu';
import SelectedBeverages, {selectLoaderBeverages} from './components/home/beveragesMenu/selected_beverages/SelectedBeverages';
import DessertsMenu, {dessertsMenuLoader} from './components/home/dessertsMenu/DessertsMenu';
import SelectedDesserts, {selectLoaderDesserts} from './components/home/dessertsMenu/selected_desserts/SelectedDesserts';
import WokMenu, {wokMenuLoader} from './components/home/wokMenu/WokMenu';
import SelectedWok, {selectLoaderWok} from './components/home/wokMenu/selected_wok/SelectedWok';
import DeliveryAddress from './components/cart/deliveryAddress/DeliveryAddress';
import {Layout} from './Layout';
import {useState} from 'react';



const App = (props) => {
  //состояние счетчика или число из сессии или 0
  let [countAmountElem, setCountAmountElem] = useState(+sessionStorage.getItem('count') || 0);

  //отображение цены по аналогии с счетчиком
  let [totalPrice, setTotalPrice] = useState(+sessionStorage.getItem('price') || 0);
  
  //если в счетчике число больше 0 записываем в сессию, изменения идут в компонентах OrderParameters и Cart
  if(countAmountElem > 0){
    sessionStorage.setItem('count', countAmountElem); 
    sessionStorage.setItem('price', totalPrice); 
  }else{
    sessionStorage.clear();
  }

  const telephone = '973-00-73';

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout countAmountElem={countAmountElem} telephone={telephone}/>}
      errorElement={<NotFound />}
    >
      <Route errorElement={<NotFound />} >
        <Route index element={<Home />} />
        <Route
          path="pizzaMenu"
          element={<PizzaMenu />}
          loader={pizzaMenuLoader}
        />
        <Route
          path="pizzaMenu/:id"
          element={<SelectedPizza countCartElem={setCountAmountElem}/>}
          loader={selectLoaderPizza}
        />
        <Route
          path="rollsMenu"
          element={<RollsMenu />}
          loader={rollsMenuLoader}
        />
        <Route
          path="rollsMenu/:id"
          element={<SelectedRolls countCartElem={setCountAmountElem}/>}
          loader={selectLoaderRolls}
        />
        <Route
          path="setsMenu"
          element={<SetsMenu />}
          loader={setsMenuLoader}
        />
        <Route
          path="setsMenu/:id"
          element={<SelectedSets countCartElem={setCountAmountElem}/>}
          loader={selectLoaderSets}
        />
        <Route
          path="BeveragesMenu"
          element={<BeveragesMenu />}
          loader={beveragesMenuLoader}
        />
        <Route
          path="beveragesMenu/:id"
          element={<SelectedBeverages countCartElem={setCountAmountElem}/>}
          loader={selectLoaderBeverages}
        />
        <Route
          path="dessertsMenu"
          element={<DessertsMenu />}
          loader={dessertsMenuLoader}
        />
        <Route
          path="dessertsMenu/:id"
          element={<SelectedDesserts countCartElem={setCountAmountElem}/>}
          loader={selectLoaderDesserts}
        />
        <Route
          path="wokMenu"
          element={<WokMenu />}
          loader={wokMenuLoader}
        />
        <Route
          path="wokMenu/:id"
          element={<SelectedWok countCartElem={setCountAmountElem}/>}
          loader={selectLoaderWok}
        />

        <Route
          path="promotion"
          element={<Promotion />}
        />
        <Route
          path="delivery"
          element={<Delivery />}
        />
        <Route
          path="contacts"
          element={<Contacts telephone={telephone}/>}
        />
        <Route
          path="cart"
          element={<Cart countCartElem={setCountAmountElem} setTotalPrice={setTotalPrice} />}
        />
        <Route
          path="cart/deliveryAddress"
          element={<DeliveryAddress countProduct={countAmountElem} totalPrice={totalPrice}/>}
        />
    
      </Route>
    </Route>
  )
);
  return (
    <RouterProvider router={router} />
  );
}

export default App;