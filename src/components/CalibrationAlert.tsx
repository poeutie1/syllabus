/* src/components/CalibrationAlert.tsx */
import React from "react";
import { Task } from "@/types";
import { meanAbsError } from "@/lib/metrics";

interface Props {
  tasks: Task[];
  threshold?: number;
}

const CalibrationAlert: React.FC<Props> = ({ tasks, threshold = 15 }) => {
  const mae = meanAbsError(tasks);
  if (mae <= threshold) return null;
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
      <p>
        平均誤差が {mae.toFixed(1)}%（閾値: {threshold}
        %）を超えています。振り返りをおすすめします。
      </p>
    </div>
  );
};

export default CalibrationAlert;
