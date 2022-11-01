import { createSlice } from '@reduxjs/toolkit';
import { ILaunch } from './types';
import { fetchAllLaunches } from './actions';

export interface LaunchesState {
  launches: Record<ILaunch['id'], ILaunch>;
  status: 'loading' | 'fail' | 'idle';
}

const initialState: LaunchesState = {
  launches: {},
  status: 'idle'
};

const launchesSlice = createSlice({
  name: 'launch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLaunches.fulfilled, (state, action) => {
      action.payload.results.forEach((launch) => {
        state.launches[launch.id] = {
          id: launch.id,
          name: launch.name,
          latitude: launch.pad.latitude,
          longitude: launch.pad.longitude
        };
      });
    });
  }
});

// export const {} = launchesSlice.actions;

export default launchesSlice.reducer;
