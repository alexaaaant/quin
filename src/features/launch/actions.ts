import { createAsyncThunk } from '@reduxjs/toolkit';
import { launchesApi } from '../../services/api/launches';
import { ACTIONS } from './constants';

export const fetchAllLaunches = createAsyncThunk(ACTIONS.LAUNCH_ALL, async () => {
  const response = await launchesApi.getAllLaunches();
  return response;
});
