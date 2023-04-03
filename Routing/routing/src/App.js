import './App.css';
import Home from './components/Home';
import Other from './components/Other';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Routes>
        <Route element={<Home/>}path="/home"/>
        <Route element={<Other/>}path="/:word"/>
        <Route element={<Other/>}path="/:word/:color/:bgColor"/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
