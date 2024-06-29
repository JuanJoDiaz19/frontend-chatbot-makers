import React from 'react'
import {Route, Routes, BrowserRouter, Navigate  } from  'react-router-dom';
import ChatBotPage from '../pages/ChatBot';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Router() {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element = { <ChatBotPage/> }/>
            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Router