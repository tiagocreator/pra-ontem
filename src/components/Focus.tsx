import useTaskStore from '../hooks/taskStore';
import { Button, TextButton } from '../styles/Buttons';

import { Container, FocusTask } from '../styles/Focus';
import Spacer from './Spacer';

type Props = {};

const Focus: React.FC<Props> = () => {
  const { updateTask, focusedTask: task, nextFocusedTask } = useTaskStore();

  const handleCompletedTask = () => {
    if (task) {
      updateTask(task.id, true);
    }
  };

  return task ? (
    <Container>
      <FocusTask>{task.label}</FocusTask>
      <Button onClick={handleCompletedTask}>Completar</Button>
      <Spacer height={45} />
      <TextButton onClick={nextFocusedTask}>Pŕoxima</TextButton>
    </Container>
  ) : (
    <p>Nenhuma tarefa incompleta.</p>
  );
};

export default Focus;
