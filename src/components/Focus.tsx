import { TaskProps } from '../types';

type Props = TaskProps & {};

const Focus: React.FC<Props> = ({ tasks }) => {
  const task = tasks[0];
  return task ? <p>{task.label}</p> : <p></p>;
};

export default Focus;
