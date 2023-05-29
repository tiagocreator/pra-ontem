import useTaskStore from '../hooks/taskStore';

type Props = {};

const Focus: React.FC<Props> = () => {
  const { updateTask, focusedTask: task, nextFocusedTask } = useTaskStore();

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
