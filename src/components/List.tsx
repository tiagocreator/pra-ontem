import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { Task } from '../types';
import useTaskStore from '../hooks/taskStore';

type Props = {};

const List: React.FC<Props> = () => {
  const { tasks, setTasks, updateTask, addTask } = useTaskStore();
  const [taskLabel, setTaskLabel] = useState('');

  const handleTaskLabel = (e: ChangeEvent<HTMLInputElement>) => setTaskLabel(e.target.value);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskLabel.trim().length > 0) {
      addTask({ label: taskLabel });
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
