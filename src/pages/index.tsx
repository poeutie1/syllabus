/* src/pages/index.tsx */
import React, { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import ActualForm from "@/components/ActualForm";
import CalibrationAlert from "@/components/CalibrationAlert";
import { loadTasks } from "@/lib/storage";
import { Task } from "@/types";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// ScatterChart に渡すデータの型
interface DataPoint {
  x: string; // ISO8601 日時文字列
  y: number; // パーセント値
}
<div className="flex flex-col items-center justify-center min-h-screen p-4"></div>;

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const update = () => setTasks(loadTasks());
    update();
    window.addEventListener("tasksUpdated", update);
    return () => window.removeEventListener("tasksUpdated", update);
  }, []);

  const predictedData: DataPoint[] = tasks.map((t) => ({
    x: t.createdAt,
    y: t.predicted,
  }));

  const actualData: DataPoint[] = tasks
    .filter((t): t is Task & { actual: number } => t.actual !== undefined)
    .map((t) => ({
      x: t.updatedAt!,
      y: t.actual,
    }));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">反省ツール</h1>
      <CalibrationAlert tasks={tasks} />
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <TaskForm />
        <ActualForm />
      </div>
      <h2 className="text-2xl font-semibold mb-4">予測 vs 実績</h2>
      <ScatterChart
        width={800}
        height={400}
        margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis
          dataKey="x"
          name="日時"
          tickFormatter={(value: string) =>
            new Date(value).toLocaleDateString()
          }
        />
        <YAxis type="number" dataKey="y" name="パーセント" domain={[0, 100]} />
        <Tooltip
          labelFormatter={(label: string) => new Date(label).toLocaleString()}
        />
        <Legend />
        <Scatter name="予測" data={predictedData} fill="blue" />
        <Scatter name="実績" data={actualData} fill="red" />
      </ScatterChart>
    </div>
  );
};

export default HomePage;
