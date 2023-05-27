import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './components/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/focus-task'>Focar Tarefa</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
