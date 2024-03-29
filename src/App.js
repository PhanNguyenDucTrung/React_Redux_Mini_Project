import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate.js';
import UserTemplate from './templates/UserTemplate.js';
import Home from './pages/Home.js';
import GameOanTuXi from './pages/GameOanTuXi/GameOanTuXi.js';
import GameXucXac from './pages/GameXucXac/GameXucXac.js';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.js';
import Todolist from './pages/Todolist/Todolist.js';
import BauCua from './pages/GameBauCua/BauCua.js';
import BookingMovies from './pages/BookingMovies/BookingMovies.js';
import AdminTemplate from './templates/AdminTemplate.js';
import Users from './pages/Admin/Users/Users.jsx';
import Products from './pages/Admin/Products/Products.jsx';
import BurgerBuilder from './pages/BurgerBuilder/BurgerBuilder.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import DemoStyledComponent from './pages/StyledComponent/DemoStyledComponents/DemoStyledComponent.js';
import LifeCycleReact from './pages/LifeCycleReact/LifeCycleReact.js';
import { DemoTheme } from './pages/StyledComponent/Themes/DemoTheme.js';
import { Outlet } from 'react-router-dom';
import UnsplashApp from '../src/pages/unsplash-images/App.jsx';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='' element={<HomeTemplate />}>
                            <Route index path='' element={<Home />}></Route>
                            <Route path='home' element={<Home />}></Route>
                            <Route path='user' element={<UserTemplate />}></Route>
                            <Route path='redux-bookingmovies' element={<BookingMovies />}></Route>
                            <Route path='redux-burger' element={<BurgerBuilder />}></Route>
                            <Route path='redux-baucua' element={<BauCua />}></Route>
                            <Route path='redux-oantuxi' element={<GameOanTuXi />}></Route>
                            <Route path='redux-xucxac' element={<GameXucXac />}></Route>
                            <Route path='redux-shoppingcart' element={<ShoppingCart />}></Route>

                            <Route path='*' element={<Navigate to={''} />}></Route>
                        </Route>

                        <Route path='redux-todolist' element={<Todolist />}></Route>
                        <Route path='/admin' element={<AdminTemplate />}>
                            <Route path='users' element={<Users />}></Route>
                            <Route path='products' element={<Products />}></Route>
                        </Route>
                        <Route path='/learning' element={<Outlet></Outlet>}>
                            <Route path='styled-component-demo' element={<DemoStyledComponent />}></Route>
                            <Route path='styled-component-demo2' element={<DemoTheme />}></Route>
                            <Route path='life-cycle-react-demo' element={<LifeCycleReact />}></Route>
                        </Route>
                        <Route path='unsplash-images' element={<UnsplashApp />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        );
    }
}
