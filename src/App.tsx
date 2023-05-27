import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import List from './components/List';
import Focus from './components/Focus';

import { Task } from './types';

const isActiveStyle = {
  fontWeight: 'bold',
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const TaskProps = { tasks, setTasks };

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
        <Route path='/' element={<List {...TaskProps} />} />
        <Route path='/focus-task' element={<Focus {...TaskProps} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
