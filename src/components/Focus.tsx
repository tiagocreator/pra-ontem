import { TaskProps } from '../types';

type Props = TaskProps & {};

const Focus: React.FC<Props> = ({ tasks, updateTask }) => {
  const task = tasks.filter((task) => !task.completed)[0];

  const handleCompletedTask = () => {
    updateTask(task.id, true);
  };

  return task ? (
    <div>
      <p>{task.label}</p>
      <button onClick={handleCompletedTask}>Completo</button>
    </div>
  ) : (
    <p>Nenhuma tarefa incompleta.</p>
  );
};

export default Focus;
