import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import List from './components/List';
import Focus from './components/Focus';

const isActiveStyle = {
  fontWeight: 'bold',
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/' style={({ isActive }) => (isActive ? isActiveStyle : {})}>
          Lista
        </NavLink>
        {' - '}
        <NavLink to='/focus-task' style={({ isActive }) => (isActive ? isActiveStyle : {})}>
          Foco
        </NavLink>
      </nav>
      <br />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/focus-task' element={<Focus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
