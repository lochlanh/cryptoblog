import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';


import Signin from './components/Signin';
import Signup from './components/Signup';

import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <div>
                  <div className="app">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="main">
        
            
            <div className="routes">
          <Routes>
            <Route path='/login' element={<Signin />} />
            <Route path='/Signup' element={<Signup />} />

            <Route
             path='/'
              element={
                <ProtectedRoute>
                  <Homepage />
                </ProtectedRoute>
            }
            />
              <Route exact path="/cryptocurrencies" element={  <ProtectedRoute><Cryptocurrencies /></ProtectedRoute>}/>
              <Route exact path="/crypto/:coinId" element={  <ProtectedRoute><CryptoDetails /></ProtectedRoute> }/>
       

          </Routes>
          </div>
          </div>

          </div>     
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022 
          <Link to="/">
            Crypto Blog Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
        </Space>
      </div>
    
  
    </div>
    );
  


export default App;
