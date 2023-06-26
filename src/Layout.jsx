import React from 'react';
import Header from './components/header/Header';
import { Outlet } from "react-router-dom";


const Layout = (props)=> {

  return (
    <>
    <Header amountElem={props.countAmountElem} telephone={props.telephone} />
    <main>
        <Outlet />
    </main>
    </>
    );
}

export {Layout};