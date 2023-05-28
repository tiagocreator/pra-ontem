export type Task = {
  label: string;
  id: string;
  completed: boolean;
};

export type TaskProps = {
  addTask: (task: Pick<Task, 'label'>) => void;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTask: (taskId: string, completed: boolean) => void;
  focusedTask?: Task;
  nextFocusedTask: () => void;
};
