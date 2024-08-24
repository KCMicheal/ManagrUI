import React from "react";
import { useParams } from "react-router-dom";
import { fetchTaskById } from "../services/taskService";

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = React.useState(null);

  React.useEffect(() => {
    async function loadTask() {
      const task = await fetchTaskById(id);
      setTask(task);
    }

    loadTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      {/* More task details here */}
    </div>
  );
};

export default TaskDetailsPage;
