import React, { useState } from "react";
import { Task } from "@/types";
import { loadTasks, saveTasks } from "@/lib/storage";
import { v4 as uuidv4 } from "uuid";

const TaskForm: React.FC = () => {
  const [name, setName] = useState("");
  const [predicted, setPredicted] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tasks = loadTasks();
    const newTask: Task = {
      id: uuidv4(),
      name,
      predicted,
      createdAt: new Date().toISOString(),
    };
    saveTasks([...tasks, newTask]);
    setName("");
    setPredicted(0);
    window.dispatchEvent(new Event("tasksUpdated"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm font-medium">項目名</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="例: テスト名、タスク名など"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">予測自信度 (%)</label>
        <input
          type="number"
          value={predicted}
          onChange={(e) => setPredicted(Number(e.target.value))}
          min={0}
          max={100}
          className="mt-1 block w-full border rounded p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        項目登録
      </button>
    </form>
  );
};

export default TaskForm;
