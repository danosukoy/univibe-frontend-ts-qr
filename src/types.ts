export interface Event {
  id: number;
  name: string;
  description?: string;
  date?: string;
  capacity?: number;
  state?: string;
}

export interface Achievement {
  id: number;
  name: string;
  description?: string;
  iconUrl?: string;
}

export interface EventHistoryItem {
  id: number;
  name: string;
  status: string;
  date?: string;
}

export interface PointsResponse {
  totalPoints: number;
}
