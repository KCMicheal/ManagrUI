import React from 'react'

interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
  dueDate?: string; // Optional due date for the task
}

type TaskCardProps = {
  task: Task;
  onClick?: () => void; // Optional onClick handler for when the card is clicked
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  // Determine the color of the priority label based on the task's priority
  const priorityColor =
    task.priority === "High"
      ? "text-red-500"
      : task.priority === "Medium"
      ? "text-yellow-500"
      : "text-green-500";

  // Determine the color of the status label based on the task's status
  const statusColor =
    task.status === "Completed"
      ? "text-green-600"
      : task.status === "In Progress"
      ? "text-blue-600"
      : "text-gray-600";

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
      <p className={`text-sm font-medium ${priorityColor}`}>
        {task.priority} Priority
      </p>
      <p className={`text-sm font-medium ${statusColor}`}>{task.status}</p>
      {task.dueDate && (
        <p className="text-sm text-gray-500 mt-2">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}
      {task.description && (
        <p className="text-sm text-gray-700 mt-2">{task.description}</p>
      )}
      {/* You can add more details like assigned users, tags, etc., here */}
    </div>
  );
};

export default TaskCard;