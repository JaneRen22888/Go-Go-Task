export type Priority = 'P0' | 'P1' | 'P2' | 'P3';

export interface Task {
  id: string;
  content: string;
  priority: Priority;
  estimatedTime: number; // 以分钟为单位
  completed: boolean;
  createdAt: number;
} 