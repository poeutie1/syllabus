// src/types.ts
export interface Task {
  id: string; // UUID など一意のキー
  name: string; // タスク名
  predicted: number; // 予測自信度（0–100）
  actual?: number; // 実績（0–100、未入力時は undefined）
  createdAt: string; // 登録日時（ISO8601）
  updatedAt?: string; // 実績入力日時
}
