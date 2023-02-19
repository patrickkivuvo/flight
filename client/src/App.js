
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListFlightComponent from './components/ListFlightComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddFlightComponent from './components/AddFlightComponent';
import UpdateFlightComponent from './components/UpdateFlightComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<ListFlightComponent />}></Route>
          <Route path="/flights" element={<ListFlightComponent/>} ></Route>
        <Route path="/add-flight" element={<AddFlightComponent/>}></Route>
        <Route path="/edit-flight/:id" element={<UpdateFlightComponent/>}></Route>
      
      </Routes>
    </Router>
    {/*<FooterComponent />*/}
    </div>
  );
}

export default App;
