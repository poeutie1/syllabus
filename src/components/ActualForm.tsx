import React, { useState, useEffect } from "react";
import { Task } from "@/types";
import { loadTasks, saveTasks } from "@/lib/storage";

const ActualForm: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [actual, setActual] = useState<number>(0);

  useEffect(() => {
    const update = () =>
      setTasks(loadTasks().filter((t) => t.actual === undefined));
    update();
    window.addEventListener("tasksUpdated", update);
    return () => window.removeEventListener("tasksUpdated", update);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const all = loadTasks();
    const updated = all.map((t) =>
      t.id === selectedId
        ? { ...t, actual, updatedAt: new Date().toISOString() }
        : t
    );
    saveTasks(updated);
    setSelectedId("");
    setActual(0);
    window.dispatchEvent(new Event("tasksUpdated"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block text-sm font-medium">項目を選択</label>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          required
        >
          <option value="">-- 未完了項目 --</option>
          {tasks.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">実績正答率 (%)</label>
        <input
          type="number"
          value={actual}
          onChange={(e) => setActual(Number(e.target.value))}
          min={0}
          max={100}
          className="mt-1 block w-full border rounded p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        実績入力
      </button>
    </form>
  );
};

export default ActualForm;
