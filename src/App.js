import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      <Routes>
        <Route index element={<Home />} />
      </Routes>   
    </div>
    </BrowserRouter>
  );
}

export default App;
