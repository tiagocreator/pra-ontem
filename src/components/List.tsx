import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { nanoid } from 'nanoid';

import { Task, TaskProps } from '../types';

type Props = TaskProps & {};

const List: React.FC<Props> = ({ tasks, setTasks, updateTask }) => {
  const [taskLabel, setTaskLabel] = useState('');

  const handleTaskLabel = (e: ChangeEvent<HTMLInputElement>) => setTaskLabel(e.target.value);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskLabel.trim().length > 0) {
      setTasks((tasks) => [...tasks, { label: taskLabel, id: nanoid(), completed: false }]);
      setTaskLabel('');
    }
  };

  const handleCompletedTask = (selectedTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
    updateTask(selectedTask.id, e.target.checked);
  };

  const handleClearCompleted = () => {
    setTasks((tasks) => tasks.filter((task) => !task.completed));
  };

  const handleTaskDelete = (selectedTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== selectedTask.id));
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input type='checkbox' checked={task.completed} onChange={handleCompletedTask(task)} />
            {task.label}
            <button onClick={handleTaskDelete(task)}>Remover</button>
          </div>
        ))}
      </div>
      <input value={taskLabel} onChange={handleTaskLabel} onKeyDown={handleKeyPress} />
      <div>
        <button onClick={handleClearCompleted}>Remover Completas</button>
      </div>
    </div>
  );
};

export default List;
