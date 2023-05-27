import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { nanoid } from 'nanoid';

type Props = {};

type Task = {
  label: string;
  id: string;
  completed: boolean;
};

const List: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskLabel, setTaskLabel] = useState('');

  const handleTaskLabel = (e: ChangeEvent<HTMLInputElement>) => setTaskLabel(e.target.value);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && taskLabel.trim().length > 0) {
      setTasks((tasks) => [...tasks, { label: taskLabel, id: nanoid(), completed: false }]);
      setTaskLabel('');
    }
  };

  const handleCompletedTask = (selectedTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
    setTasks((tasks) =>
      tasks.map((taskElement) => {
        if (taskElement.id === selectedTask.id) {
          return { ...taskElement, completed: e.target.checked };
        }
        return taskElement;
      }),
    );
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
