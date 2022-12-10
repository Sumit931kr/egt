
import './App.css';
import Find from './component/Find';
import Register from './component/register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/homepage/homepage';
import Login from './component/login/login'



function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/find' element={<Find />} />

        </Routes>
      </Router>
    </div>

  );
}

export default App;
