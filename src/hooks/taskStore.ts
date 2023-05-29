import { useContext, useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';

import { Task } from '../types';
import TaskContext from '../context/taskStore';

const useTaskStore = () => {
  const [tasks, setTasks] = useContext(TaskContext);

  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    tasks.filter((task) => !task.completed)[0]?.id,
  );

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

  useEffect(() => {
    if (focusedTask?.completed) {
      setFocusedTaskId(tasks.filter((task) => !task.completed)[0]?.id);
    }
  }, [tasks, focusedTask]);

  const nextFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.completed))[0]?.id);
  };

  const api = { tasks, setTasks, addTask, updateTask, focusedTask, nextFocusedTask };

  return api;
};

export default useTaskStore;
