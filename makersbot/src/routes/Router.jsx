import React from 'react'
import {Route, Routes, BrowserRouter, Navigate  } from  'react-router-dom';
import ChatBotPage from '../pages/ChatBot';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';


function Router() {
  return (
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element = { <HomePage/> }/>
                <Route path="/chatbot" element = { <ChatBotPage/> }/>
            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Router