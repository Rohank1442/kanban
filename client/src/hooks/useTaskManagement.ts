import { useCallback } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Task } from '@/types/tasks/index.type';

interface TaskManagementHook {
  loadTasks: () => Promise<Task[]>;
}

const useTaskManagement = (): TaskManagementHook => {
  const loadTasks = useCallback(async (): Promise<Task[]> => {
    try {
      const response = await axiosInstance.get("/tasks/getall");
      return [...response.data.data];
    } catch (err) {
      console.error('An error occurred while fetching tasks:', (err as Error).message);
      return [];
    }
  }, []);

  return { loadTasks };
};

export default useTaskManagement;
