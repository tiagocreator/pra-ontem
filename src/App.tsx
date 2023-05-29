import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import List from './components/List';
import Focus from './components/Focus';

import { Task } from './types';
import useLocalStorage from './hooks/storage';
import TaskContext from './context/taskStore';

const isActiveStyle = {
  fontWeight: 'bold',
};

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
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
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
