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

  const updateTask = (taskId: string, completed: boolean) => {
    setTasks((tasks) =>
      tasks.map((taskElement) => {
        if (taskElement.id === taskId) {
          return { ...taskElement, completed };
        }
        return taskElement;
      }),
    );
  };

  const TasksApi = { tasks, setTasks, updateTask };

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
        <Route path='/' element={<List {...TasksApi} />} />
        <Route path='/focus-task' element={<Focus {...TasksApi} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
