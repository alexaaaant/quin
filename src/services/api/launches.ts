import { LAUNCH, MAIN_API_URL } from '../../features/launch/constants';
import { IGetAllLaunchesParams, ILaunchOriginal } from '../../features/launch/types';

const generateQueryParams = (params: Record<string, any>): string => {
  const str = [];
  for (const p in params)
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
    }
  return str.join('&');
};

export const launchesApi = {
  getAllLaunches: async (
    params: IGetAllLaunchesParams
  ): Promise<{ results: ILaunchOriginal[] }> => {
    const defaultQuery = { limit: 100 };
    const queryString = generateQueryParams({ ...defaultQuery, ...params });
    const response = await fetch(`${MAIN_API_URL}${LAUNCH}?${queryString}`);
    return await response.json();
  }
};
