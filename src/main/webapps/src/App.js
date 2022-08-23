import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect} from "react";
import Patient from './components/Patient';
import PatientList from "./components/PatientList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {

  return ( <div className="App">
        <Router>
            <NavigationBar />
            <Routes>

                <Route
                    path="/"
                    element={
                        <Patient /> }
                />
                <Route
                    path="/listPatient"
                    element={
                        <PatientList /> }
                />

                <Route
                    path="patient/:pId"
                    element={<Patient />}
                />

            </Routes>
  </Router>
            </div>

  );
}


export default App;
