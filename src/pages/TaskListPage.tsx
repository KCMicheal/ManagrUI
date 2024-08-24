import React, { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskService";
import TaskCard from "../components/TaskCard";

const TaskListPage: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const tasks = await fetchTasks();
      setTasks(tasks);
    }

    loadTasks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskListPage;
