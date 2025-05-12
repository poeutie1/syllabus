/* src/lib/metrics.ts */
import { Task } from "@/types";

export function meanAbsError(tasks: Task[]): number {
  const done = tasks.filter((t) => t.actual !== undefined);
  if (!done.length) return 0;
  const total = done.reduce(
    (sum, t) => sum + Math.abs(t.predicted - (t.actual as number)),
    0
  );
  return total / done.length;
}
