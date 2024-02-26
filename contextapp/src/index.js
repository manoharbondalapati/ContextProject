import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import NavApp from "./Navbar/NavApp";
import CounterDis from "./redux/CounterDis";
import { Provider } from "react-redux";
import {Store} from './redux/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={Store}>
    <CounterDis/>
</Provider>)

