import React from 'react'
import {Route, Routes, BrowserRouter, Navigate  } from  'react-router-dom';
import ChatBotPage from '../pages/ChatBot';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import InventoryPage from '../pages/InventoryPage';


function Router() {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element = { <HomePage/> }/>
                <Route path="/chatbot" element = { <ChatBotPage/> }/>
                <Route path="/inventory" element = { <InventoryPage/> }/>
                <Route path="/*" element = { <ErrorPage/> }/>
            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Router