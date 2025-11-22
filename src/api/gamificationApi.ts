import apiClient from './apiClient';
import { Achievement, PointsResponse, EventHistoryItem } from '../types';

export const getUserPoints = async (): Promise<PointsResponse> => {
  const res = await apiClient.get<PointsResponse>('/gamification/points/me');
  return res.data;
};

export const getUserAchievements = async (): Promise<Achievement[]> => {
  const res = await apiClient.get<Achievement[]>('/gamification/achievements/me');
  return res.data;
};

export const getEventHistory = async (): Promise<EventHistoryItem[]> => {
  const res = await apiClient.get<EventHistoryItem[]>('/registration/history/me');
  return res.data;
};
