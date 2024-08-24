import axios from "axios";

const API_BASE_URL = "https://localhost:5001/api";

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const fetchTaskById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
  return response.data;
};

// More service functions like createTask, updateTask, deleteTask, etc.
