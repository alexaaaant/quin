import { LAUNCH, MAIN_API_URL } from '../../features/launch/constants';
import { ILaunchOriginal } from '../../features/launch/types';

export const launchesApi = {
  getAllLaunches: async (): Promise<{ results: ILaunchOriginal[] }> => {
    const response = await fetch(`${MAIN_API_URL}${LAUNCH}`);
    return await response.json();
  }
};
