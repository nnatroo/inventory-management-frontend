import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/modules/App.module.css'
import Home from '../src/pages/Home'
import Add from '../src/pages/Add'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/add' element={<Add />} />
      </Routes>
    </Router>
  );
};


export default App
