import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';

import List from './components/List';
import Focus from './components/Focus';

import { Task } from './types';

import useLocalStorage from './hooks/storage';

const isActiveStyle = {
  fontWeight: 'bold',
};

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(undefined);

  const addTask = (task: Pick<Task, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [...tasks, { label: task.label, id, completed: false }]);
    if (!focusedTaskId) {
      setFocusedTaskId(id);
    }
  };

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

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  const nextFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.completed))[0]?.id);
  };

  const TasksApi = { tasks, setTasks, addTask, updateTask, focusedTask, nextFocusedTask };

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
