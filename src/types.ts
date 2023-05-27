export type Task = {
  label: string;
  id: string;
  completed: boolean;
};

export type TaskProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTask: (taskId: string, completed: boolean) => void;
};
