import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/home';
import DropDown from './pages/component/DropdownClass';
import DropDownTest from './pages/component/DropdownClass';
import Container from './pages/component';
import TodoApp from './buoi3/TodoApp';
import ToDoApp from './b1-again/toDoApp';
import WebApp from './bai2/webApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <DropDown title = 'iphone' listItem ={['Ip10','Ip11','Ip12','Ip13']}/>
  <WebApp/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
