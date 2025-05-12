// src/lib/storage.ts
import { Task } from "@/types";

const KEY = "tasks";

export function loadTasks(): Task[] {
  const json = localStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}
