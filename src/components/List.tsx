import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { Task } from '../types';
import useTaskStore from '../hooks/taskStore';

import Checkbox from './CheckBox';

import { Container, DeleteButton, ListContainer, ListItem, TaskInput } from '../styles/List';
import { TextButton } from '../styles/Buttons';
import Spacer from './Spacer';
import DeleteIcon from '../icons/Delete';

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
    <Container>
      <ListContainer>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              type='checkbox'
              checked={task.completed}
              onChange={handleCompletedTask(task)}
            />
            <Spacer width={24} />
            {task.label}
            <Spacer flex={1} />
            <DeleteButton onClick={handleTaskDelete(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </ListContainer>
      <Spacer height={30} />
      <TaskInput value={taskLabel} onChange={handleTaskLabel} onKeyDown={handleKeyPress} />
      <Spacer height={45} />
      <TextButton onClick={handleClearCompleted}>Remover Completas</TextButton>
    </Container>
  );
};

export default List;
