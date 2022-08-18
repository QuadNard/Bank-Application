import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import BankScreen from './screens/BankScreen'
import './App.css'


function App() {

  return (
<>
  <Header />
  <main>
  <Container>
   <Routes>
       <Route path ="/" element={<HomeScreen />}  />
       <Route path ="/signupscreen" element={<SignupScreen />}  />
       <Route path ="/loginscreen" element={<LoginScreen />}  />
       <Route path ="/bankscreen" element={<BankScreen />}  />
   </Routes>
   </Container>
   </main>
   <Footer />
</>
  );
}

export default App;
