import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {CounterContextProvider} from './context/ConterContext'

ReactDOM.render(
<CounterContextProvider>
   <App />
</CounterContextProvider>
  ,
  document.getElementById('root')
);
