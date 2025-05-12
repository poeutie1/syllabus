// src/lib/storage.ts
import { Task } from "@/types";

const KEY = "tasks";

export function loadTasks(): Task[] {
  const json = localStorage.getItem(KEY);
  if (!json) return [];

  try {
    // JSON.parse の返り値を Task[] としてキャスト
    return JSON.parse(json) as Task[];
  } catch {
    console.warn("Failed to parse tasks from localStorage.");
    return [];
  }
}

export function saveTasks(tasks: Task[]): void {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}
