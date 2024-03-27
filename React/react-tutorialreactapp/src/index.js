import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Car from './components/ChangeColor';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Head from './components/Header';
// import Changecolor from './components/Favoritecolor';
// import Scooter from './components/Scooter';
// import List from './components/List';
// import Time from './Timer';
import MyForm from './components/MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <Head/> */}
    {/* <Changecolor/>
    <Car/>
    <Scooter/>
    <List/> */}
    {/* <Time/> */}
    <MyForm/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
