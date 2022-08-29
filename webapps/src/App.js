import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Patient from './components/Patient';
import PatientList from "./components/PatientList";
import MyAlert from "./components/MyAlert";
import Background from "./components/Background"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    axios.get("https://spring-run.d21it181.repl.co/")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => alert(error));

  }, []);


  let showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (<div className="App">
    <Router>
      <NavigationBar />
      <MyAlert alert={alert} />
      <Routes>

        <Route
          path="/"
          element={
            <Background />}
        />
        <Route
          path="/addPatient"
          element={
            <Patient showAlert={showAlert} />}
        />
        <Route
          path="/listPatient"
          element={
            <PatientList showAlert={showAlert} />}
        />

        <Route
          path="/patient/:pId"
          element={<Patient showAlert={showAlert} />}
        />

      </Routes>
    </Router>
  </div>

  );
}


export default App;
