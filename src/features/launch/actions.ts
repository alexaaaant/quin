import { createAsyncThunk } from '@reduxjs/toolkit';
import { launchesApi } from '../../services/api/launches';
import { ACTIONS } from './constants';
import { IGetAllLaunchesParams } from './types';

export const fetchAllLaunches = createAsyncThunk(
  ACTIONS.LAUNCH_ALL,
  async (params: IGetAllLaunchesParams) => {
    const response = await launchesApi.getAllLaunches(params);
    return response;
  }
);
