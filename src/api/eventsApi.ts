import apiClient from './apiClient';
import { Event } from '../types';

export const getAllEvents = async (): Promise<Event[]> => {
  const res = await apiClient.get<Event[]>('/events');
  return res.data;
};

export const registerToEvent = async (eventId: number): Promise<{ registrationId?: string; qrToken?: string }> => {
  const res = await apiClient.post('/registration', { eventId });
  return res.data;
};

export const getRegistrationQr = async (registrationId: string): Promise<string> => {
  // backend can return dataUrl or PNG blob; here we handle dataUrl string first
  const res = await apiClient.get(`/registration/${registrationId}/qr`);
  if (res.data?.dataUrl) return res.data.dataUrl;
  // fallback to blob
  const blob = await apiClient.get(`/registration/${registrationId}/qr`, { responseType: 'blob' });
  return URL.createObjectURL(blob.data);
};
