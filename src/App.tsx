import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './components/List';
import Focus from './components/Focus';

import { Task } from './types';
import useLocalStorage from './hooks/storage';
import TaskContext from './context/taskStore';

import { GlobalStyle } from './globalStyles';
import { Main } from './styles/Main';
import { Nav, Button } from './styles/SwitchButtons';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <Main>
            <Nav>
              <Button to='/' className={(isActive) => 'active' + (!isActive ? ' unselected' : '')}>
                Lista
              </Button>
              <Button
                to='/focus-task'
                className={(isActive) => 'active' + (!isActive ? ' unselected' : '')}>
                Foco
              </Button>
            </Nav>
            <Routes>
              <Route path='/' element={<List />} />
              <Route path='/focus-task' element={<Focus />} />
            </Routes>
          </Main>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
