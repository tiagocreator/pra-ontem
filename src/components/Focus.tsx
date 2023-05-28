import { TaskProps } from '../types';

type Props = TaskProps & {};

const Focus: React.FC<Props> = ({ tasks, updateTask, focusedTask: task, nextFocusedTask }) => {
  const handleCompletedTask = () => {
    if (task) {
      updateTask(task.id, true);
    }
  };

  return task ? (
    <div>
      <p>{task.label}</p>
      <button onClick={handleCompletedTask}>Completo</button>
      <button onClick={nextFocusedTask}>Pŕoxima</button>
    </div>
  ) : (
    <p>Nenhuma tarefa incompleta.</p>
  );
};

export default Focus;
